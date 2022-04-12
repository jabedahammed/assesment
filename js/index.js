document.addEventListener('DOMContentLoaded', function(){
    fetch("./data/first_collection.json").then(res=>res.json()).then(res=>{
        fetch("./data/data.json").then(res=>res.json()).then(res=>{
            let itemclass = document.getElementById("main-body")
            let str = ""
            res.forEach((item,i)=>{
                str += `<div class="item-child">
                    <div class="base-img"><img src="./images/${item.imageUrl}" /></div>
                    <div class="description">
                        <h2>${item.title}</h2>
                        <div>${item.intro}</div>
                        <div class="icon-svg">
                            <div>
                                <img src="icons/clock-solid.svg" alt="blabla_is_working">
                                <span>${item.publishedOn}</span>
                            </div>
                            <div>
                                <img src="icons/comment-alt-regular.svg" alt="blabla_is_working">
                                <span>${item.numberOfComment}</span>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>`
            })
            itemclass.innerHTML = str;
        }).catch()
    }).catch(err=>{

    })
    
}, false);