const container = document.querySelector('.container')
const seats= document.querySelectorAll('.row .seat:not(.occupied)')
const count =document.getElementById('count')
const total = document.getElementById('total')
const movieSelect =document.getElementById('movie')

populateUI()

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
  
    console.log(selectedSeats)
  
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    console.log("mang arry",selectedSeats)
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  
    const selectedSeatsCount = selectedSeats.length;
  
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    
    setMovieData(movieSelect.selectedIndex, movieSelect.value);
  }
  

  movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
  });


  function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  console.log(selectedSeats)
    if (selectedSeats !== null && selectedSeats.length >0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add('selected');
        }
      });
    }
  
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  
    if (selectedMovieIndex !== null) {
      movieSelect.selectedIndex = selectedMovieIndex;
    }
  }
container.addEventListener('click', e => {

    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){

    e.target.classList.toggle('selected')
    
    updateSelectedCount();
    
    }

})

let ticketPrice = +movieSelect.value;

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
  }