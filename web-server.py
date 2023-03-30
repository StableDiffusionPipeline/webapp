import flask
import os

app = flask.Flask(
    __name__,
    template_folder = "./website"
)

@app.route('/css/<path:path>')
async def send_css(path):
    return flask.send_from_directory('./website/css', path), 200

@app.route('/js/<path:path>')
async def send_js(path):
    return flask.send_from_directory('./website/js', path), 200

@app.route('/outputs/<path:path>')
async def send_outputs(path):
    return flask.send_from_directory('./outputs', path), 200

@app.route('/favicon.ico')
async def favicon_ico():
    return flask.send_from_directory('./website', 'favicon.ico'), 200

@app.route('/icon.png')
async def icon_png(path):
    return flask.send_from_directory('./website', 'icon.png'), 200

@app.route('/gallery')
async def gallery():
    user_id = flask.request.cookies.get('user_id')
    if user_id == None:
        return flask.render_template('gallery.html'), 200
    else:
        return flask.render_template('gallery_logged.html', user_id = user_id), 200

@app.route('/gallery-my')
async def gallery_my():
    user_id = flask.request.cookies.get('user_id')
    if user_id == None:
        return flask.redirect('/gallery')
    else:
        return flask.render_template('gallery_logged_my.html', user_id = user_id), 200

@app.route('/api/gallery')
async def api_gallery():
    files_list = os.listdir('./outputs')[-100:]
    return flask.jsonify(files = files_list), 200

@app.route('/api/gallery-my')
async def api_gallery_my():
    user_id = flask.request.cookies.get('user_id')
    files_list = os.listdir('./outputs')

    files_list = [filename for filename in files_list if filename.startswith(user_id)]
    return flask.jsonify(files = files_list), 200

@app.route('/login/<path:path>')
def login(path):
    response = flask.make_response(flask.redirect('/'))
    response.set_cookie('user_id', path)
    return response
    #return 'not implemented', 501

@app.route('/')
async def index():
    return flask.render_template('index.html'), 200

app.run(
    port = 7894,
    debug = True
)