
function setArticleDelete(params) {
    
    document.getElementById("articleToDeleteId").value = params
}

function deleteArticle() {
    let x = document.getElementById('articleToDeleteId').value
    
    // const post_process = "post_delete"
    const url = '/blog-list/blog-delete/'+x
    
    // formDa.append('process', post_process)
    fetch(url, {
        method:'DELETE',
        headers:{
                
                'X-CSRFToken':csrftoken,},
        
    })
    .then((response) =>{
        response.json()
        if (response.status == 200){
            location.reload()
        }
    })
}



function openSidebar(param) {
    let x = document.getElementById("dashboard-sidebar").classList
    
    if (param == "close") {
        
        if (x.contains("dashboard-sidebar-on")) {
            x.remove("dashboard-sidebar-on")
            x.add("dashboard-sidebar-off")
            
        }
       
    }
    else{
        
        x.remove("dashboard-sidebar-off")
        x.add("dashboard-sidebar-on")

    }
    
}

