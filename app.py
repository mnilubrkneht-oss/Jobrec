# required imports from Flask
from flask import Flask, render_template, request

# Flask App Instance
app = Flask(__name__)

# Route for the Index Page (Home)
# የመነሻ ገጽ (index.html) መንገድ
@app.route('/')
def index():
    # index.html ፋይልን አሳይ
    return render_template('index.html')

# Route for the Selection Page
# selection.html ገጽ መንገድ
@app.route('/selection')
def selection():
    # የ Selection ገጽን አሳይ. 
    # የ type ዋጋ (organization/individual) ከ Query String (?type=...) ስለሚመጣ,
    # እዚህ ላይ route ላይ ግቤት (<type>) አያስፈልግም.
    return render_template('selection.html')

# Route for the Listings Page
# listings.html ገጽ መንገድ
@app.route('/listings')
def listings():
    # listings.html ን አሳይ
    return render_template('listings.html')

# Route for the Detail Page
# detail.html ገጽ መንገድ
@app.route('/detail')
def detail():
    # detail.html ን አሳይ
    return render_template('detail.html')

# Run the Flask Application
if __name__ == '__main__':
    # debug=True ማድረጉ በኮድ ላይ ለውጥ ሲደረግ አገልጋዩ በራሱ እንዲጀምር ይረዳል
    app.run(debug=True)