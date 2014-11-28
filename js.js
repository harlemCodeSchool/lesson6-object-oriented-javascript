window.onload = function() {

 // alert("lets have some fun with objects!");

  var articles_wrap = document.getElementById('articles');
  var articles = {};


    function Article (title, body) {
      // create elements
      this.wrap = wrap = document.createElement('div');
      this.title_div = title_div = document.createElement('h2');
      this.body_div = body_div = document.createElement('div');
      this.title = title;
      this.body = body;

      // add attributes
      wrap.class = "article";
      title_div.class = "title";
      body_div.class = "body";
      
      // add content
      title_div.innerHTML = title;
      body_div.innerHTML = body;
      
      // append title/body to wrap
      wrap.appendChild(title_div);
      wrap.appendChild(body_div);

      // style article
      ws = wrap.style; 
      ws.border = '2px solid dodgerblue';
      ws.width = '12em';
      ws.display = 'inline-block';

      this.render = function() {  
         articles_wrap.appendChild(wrap);
      }

      // set up drafts
      var drafts = {};

      this.saveAsDraft = function() {
          drafts[title] = this;
      }

      // store each article we make for future reference
      articles[title] = this;
    };



    // demo articles 1 & 2
    var article1 = new Article('test article', 'test body content. Lorem Ipsom and all that good stuff.');
    article1.render();
    
    article2 = new Article('2nd article', 'we are here at the waterbury open for the newly added longest drive competition');
    article2.render();


    // alternate create method
    function createArticle(title, content) {
     // var len = Object.keys(articles).length;

      var n = new Article(title, content);
      n.render();
      return n;
    }

    // demo article 3
    createArticle('man bear pig rises', "and I'm super serial this time. serial.");

    // log each artile
    articles.forEach = function(art) {
      console.log('title: ' + art.title + ' body: ' + art.body);
    }


    // create article with button
    var button = document.getElementById('form_submit');
    button.onclick = function() {
      var t = document.getElementById('form_title');
      var b = document.getElementById('form_body');

      var art = createArticle(t.value, b.value);

      t.value = '';
      b.value = '';
    }

    function viewDrafts () {
      var draft_wrap = document.createElement('div');

      for(key in article){
        var tit = document.createElement('h2');
        var body = document.createElement('p');

        

      }

    }

}