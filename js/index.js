const LANDING_COLLECTION_TYPE = "landing"
document.addEventListener('DOMContentLoaded', function(){
    fetch("./api/collection/collectiontypes.json").then(res=>res.json()).then(res=>{
        let collection = res.find(item=>{
            return item.collectiontype == LANDING_COLLECTION_TYPE
        })
        if(collection){
            fetch("./api/collection/data.json").then(res=>res.json()).then(res=>{
                if(res && Array.isArray(res)){
                    let finalData = res.filter(item=>{
                        if(item.collectionid == collection.collectionid){
                            return true
                        }
                        return false;
                    })
                    if(finalData){
                        let itemclass = document.getElementById("main-body")
                        let str = ""
                        finalData.forEach((item,i)=>{
                            str += `<div class="item-child">
                                <div class="base-img"><img src="./images/${item.imageUrl}" /></div>
                                <div class="description">
                                    <h2>${item.title}</h2>
                                    <div>${item.intro}</div>
                                    <div class="icon-svg">
                                        <div>
                                            <img src="icons/clock-solid.svg" alt="clock-soldi">
                                            <span>${item.publishedOn}</span>
                                        </div>
                                        <div>
                                            <img src="icons/comment-alt-regular.svg" alt="comment-alt-regular">
                                            <span>${item.numberOfComment}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>`
                        })
                        itemclass.innerHTML = str;
                    }
                    else{
                        alert("Sorry some error happened in api")
                    }
                }else{
                    alert("Sorry some error happened in api")
                }
                
            }).catch(err=>{
                alert("Sorry some unknown error happened")
            })
        }
    }).catch(err=>{
        alert("Sorry some unknown error happened")
    })
    
}, false);