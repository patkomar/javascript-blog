'use strict';

function titleClickHandler(event){
  console.log('Link was clicked!');
  console.log(event);

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [IN PROGRESS] add class 'active' to the clicked link */
  event.preventDefault();
  const clickedElement = this;
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);



  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts .active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }


  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);
  /* find the correct article using the selector (value of 'href' attribute) */
  const href = clickedElement.getAttribute('href')
  const targetArticle = document.querySelector(href);

  console.log(targetArticle);

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}



const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author',
  optTagsListSelector = '.tags.list';

  function generateTitleLinks(customSelector = ''){


  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  function clearTitleList(){
    document.querySelector(optTitleListSelector).innerHTML = "";
  }
  clearTitleList();

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  let html = '';
  for(let article of articles){
    /* get the article id */
    const articleId = article.getAttribute("id");
    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    const linkHTMLData = {id: articleId, title: articleTitle};
   
    /* insert link into titleList */
   html = html + linkHTML;
  }
   titleList.innerHTML = html
   
   const links = document.querySelectorAll('.titles a');
   for(let link of links){
     link.addEventListener('click', titleClickHandler);
   }
  
 }
 generateTitleLinks();

 function generateTags(){
    /* [NEW] create a new variable allTags with an empty object */
    let allTags = {};

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for(let article of articles){

    /* find tags wrapper */
    const titleTag = article.querySelector(optArticleTagsSelector);
    console.log(titleTag);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);

    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
    console.log(tag);

      /* generate HTML of the link */
         //const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li> ';
         const linkHTMLData = {id: tag, tagName: tag};
         const linkHTML = templates.tagLink(linkHTMLData);
    

      /* add generated code to html variable */
      html = html + linkHTML
      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags.hasOwnProperty(tag)){
        /* [NEW] add tag to allTatgs obejct */
       allTags[tag] = 1;
      } else {
        allTags[tag]++;
      
        
      }
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    titleTag.innerHTML = html;

  /* END LOOP: for every article: */
}
/* [NEW] find list of tags in right column */
const tagList = document.querySelector(optTagsListSelector);

/* [NEW] create variable for all links HTML code */
let allTagsHTML = '';

/* [NEW] START LOOP: for each tag in allTags: */
for(let tag in allTags){
  /* [NEW] generate code of a link and add it to allTagsHTML */
  allTagsHTML += tag + ' (' + allTags[tag] +') ';
}
/*[NEW] END LOOP: for each tag in allTags: */
 }
 /*[NEW] add html form allTagsHTML to tagList */
 tagList.innerHTML = allTagsHTML;

 generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');

  /* find all tag links with class active */
const activeTagsLink = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */ 
  for(let acrtiveTagLink of acrtiveTagsLinks){
    /* remove class active */
    acrtiveTagLink.classList.remove('active');

  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('href');

  /* START LOOP: for each found tag link */
  for(let tagLink of tagsLinks){

    /* add class active */
tagLink.classList.add('active');
  /* END LOOP: for each found tag link */
}
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  tagLinks.document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each link */
for(let tagLink of tagsLinks){
    /* add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click, tagClickHandler');
  /* END LOOP: for each link */
}
}

addClickListenersToTags();

function generateAuthors(){;
const author = document.querySelectorAll(optArticleSelector);
for(let article of articles){
  const titleAuthor = article.querySelector(optArticleAuthorSelector);
  let html = ''
  const author = article.getAttribute('data-author');
   //const linkHTML = '<li><a href="#author-' + author + '">' + author + '</a></li>';
  const linkHTMLData = {id: author , authorName: author};
  const authorLink = templates.authorLink(linkHTMLData);
  html = html + authorLink;
  if(!allAuthors.hasOwnProperty(author)){
    allAuthors[author] = 1;
  } else {
    allAuthors[author]++;
  }
  titleAuthor.innerHTML = html;
}  
 const authorList = document.querySelector(optArticleAuthorSelector);
 let allAuthorsHTML = '';
 for(let author in allAuthors){
  const authorLinkHTML = '<li><a  href="#author-' + author + '">' + author + '</a></li>';
  allAuthorsHTML += authorLinkHTML;
}
authorList.innerHTML = allAuthorsHTML;
}
generateAuthors();

function authorClickHandler(event){
event.preventDefault();

const clickedElement = this;

const href = clickedElement.getAttribute('href');

const author = href.replace('#author-','');

const activeAuthorLink = document.querySelectorAll('a.active[href^="#author-"]');

for(let activeAuthorLink of activeAuthorLinks){

activeAuthorLink.classList.remove('active')
}

const authorLink = document.querySelectorAll('href');

for(let activeLink of activeLinks){
  authorLink.classList.add('active');
}
generateTitleLinks('[data-author~="' + author + '"]');
}

function addClickListenersToAuthors(){
const authorLinks = document.querySelectorAll('a[href^="author-"]');

for(let authorLink of authorLinks){

  authorLink.addEventListener('click', authorClickHandler);
}}

addClickListenersToAuthors();
