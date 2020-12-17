let add = document.querySelector('.add');
let form = document.querySelector('#form');

add.addEventListener('click', ()=>{
    let data = new FormData(form);
    let config = {
        method: 'post',
        url: 'https://callboard-backend.herokuapp.com/call',
        headers: { 
          'accept': 'application/json', 
          'Content-Type': 'multipart/form-data', 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQ3Y2VhZWMyOThhMjAwMTc5YzhjYzAiLCJzaWQiOiI1ZmQ5MmMyMmNjZWZlZTAwMTc1M2ZiNzIiLCJpYXQiOjE2MDgwNjgxMzAsImV4cCI6MTYwODA3MTczMH0.I20tV29tq6tHg_XIPcDt1JW21Xmy3Un_kn64p6rMk_w'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}) 




