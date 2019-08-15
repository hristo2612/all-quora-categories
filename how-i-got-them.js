// Recursively loops through all children
// and returns every topic and subtopic as an object
// All major topics can be found here (where i took them from): https://www.quora.com/topic/Major-Topics/organize
// They appear on the right side of the page -->

function getAllTreeTopics(topicsList) {
    let topics = {};
    Array.from(topicsList).forEach((topic) => {
        let currentTopicEl = topic.querySelector('span.TopicNameSpan.TopicName');
        let currentTopicName =  currentTopicEl ? currentTopicEl.innerText : 'NOT AVAILABLE';
        let parentOfCurrentTopicEl = currentTopicEl ? currentTopicEl.closest('.light') : null;
        let children = [];
        if (parentOfCurrentTopicEl) {
            let childListEl = parentOfCurrentTopicEl.nextSibling;
            if (childListEl && childListEl.innerHTML !== "" && childListEl.childElementCount > 0 && childListEl.children) {
                children = getAllTreeTopics(childListEl.children);
            }
        }
        if (currentTopicName && currentTopicName !== "NOT AVAILABLE") {
            topics[currentTopicName] = children;
        }
    });
    return topics;
}

// Example in Browser Console: 

/** 
 * let majorTopics = documentQuerySelector('#wtliPvua30 > ul > li > ul'); 
 * let categoriesObject = getAllTreeCategories(majorTopics);
 */