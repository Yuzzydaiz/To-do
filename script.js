function showToast(text, bgColor='#000', colour='#fff'){
    Toastify({
        text: text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "left",
        stopOnFocus: true,
        style: {
          background:bgColor,
          color:colour,
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
function ClearItem(){
    showToast('All items cleared successfully', 'red', '#fff')
    showItems.innerHTML=''
}
var allItems=[]
    function addItem() {
        if (item.value != '') {
            allItems.push(item.value)
            showToast(`${item.value} added successfully`,'green', '#fff')
            document.getElementById('item').value=''
            console.log(allItems);

            showItems.innerHTML=''
            // for (i = 0; i < allItems.length; i++) {
            //     let data = allItems[i];
            //     showItems.innerHTML += `<p>${i+1}. ${data}</p>`
                
            // }
            allItems.map((data,i) => {
                 showItems.innerHTML += `<h3 style="margin-top: 40px">${i+1}. ${data}</h3>
                 <button onclick="DeleteItem()" style="color: white; background-color: red; width: 70px; height: 30px; border-radius: 20px; border: none;">Delete</button>
                 <button onclick="addItem()" style="color: white; background-color: green; width: 70px; height: 30px; border-radius: 20px; border: none;;">Edit</button>`
            })
        }
        else{
            showToast('Input cannot be empty', '#f00', '#fff')
        }
}
 
