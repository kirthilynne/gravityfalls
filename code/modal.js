// ============================================ // 

// dipper modal
const dipperModal = document.getElementById('dipperModal');
// open modal buttons
const dipperOpenBtn = document.getElementById('dipperBtn');
// close modal buttons
const dipperCloseBtn = document.getElementById('dipperCloseBtn');

// open modal
openDipperModal = () => {
    dipperModal.style.display = 'block';
}
// close modal
closeDipperModal = () => {
    dipperModal.style.display = 'none'
}
// close modal if user clicks outside of modal
clickDipperOutside = (e) => {
    if (e.target == dipperModal) {
        dipperModal.style.display='none';
    }
}

// event listeners
dipperOpenBtn.addEventListener('click', openDipperModal);
dipperCloseBtn.addEventListener('click', closeDipperModal);

// ============================================ // 

// mabel modal
const mabelModal = document.getElementById('mabelModal');
// open modal buttons
const mabelOpenBtn = document.getElementById('mabelBtn');
// close modal buttons
const mabelCloseBtn = document.getElementById('mabelCloseBtn');

// open modal
openMabelModal = () => {
    mabelModal.style.display = 'block';
}
// close modal
closeMabelModal = () => {
    mabelModal.style.display = 'none'
}
// close modal if user clicks outside of modal
clickMabelOutside = (e) => {
    if (e.target == mabelModal) {
        mabelModal.style.display='none';
    }
}

// event listeners
mabelOpenBtn.addEventListener('click', openMabelModal);
mabelCloseBtn.addEventListener('click', closeMabelModal);

// ============================================ // 

// wendy modal
const wendyModal = document.getElementById('wendyModal');
// open modal buttons
const wendyOpenBtn = document.getElementById('wendyBtn');
// close modal buttons
const wendyCloseBtn = document.getElementById('wendyCloseBtn');

// open modal
openWendyModal = () => {
    wendyModal.style.display = 'block';
}
// close modal
closeWendyModal = () => {
    wendyModal.style.display = 'none'
}
// close modal if user clicks outside of modal
clickWendyOutside = (e) => {
    if (e.target == wendyModal) {
        wendyModal.style.display='none';
    }
}

// event listeners
wendyOpenBtn.addEventListener('click', openWendyModal);
wendyCloseBtn.addEventListener('click', closeWendyModal);

// ============================================ // 

// soos modal
const soosModal = document.getElementById('soosModal');
// open modal buttons
const soosOpenBtn = document.getElementById('soosBtn');
// close modal buttons
const soosCloseBtn = document.getElementById('soosCloseBtn');

// open modal
openSoosModal = () => {
    soosModal.style.display = 'block';
}
// close modal
closeSoosModal = () => {
    soosModal.style.display = 'none'
}
// close modal if user clicks outside of modal
clickSoosOutside = (e) => {
    if (e.target == soosModal) {
        soosModal.style.display='none';
    }
}

// event listeners
soosOpenBtn.addEventListener('click', openSoosModal);
soosCloseBtn.addEventListener('click', closeSoosModal);

// ============================================ // 

// stanley modal
const stanleyModal = document.getElementById('stanleyModal');
// open modal buttons
const stanleyOpenBtn = document.getElementById('stanleyBtn');
// close modal buttons
const stanleyCloseBtn = document.getElementById('stanleyCloseBtn');

// open modal
openStanleyModal = () => {
    stanleyModal.style.display = 'block';
}
// close modal
closeStanleyModal = () => {
    stanleyModal.style.display = 'none'
}
// close modal if user clicks outside of modal
clickStanleyOutside = (e) => {
    if (e.target == stanleyModal) {
        stanleyModal.style.display='none';
    }
}

// event listeners
stanleyOpenBtn.addEventListener('click', openStanleyModal);
stanleyCloseBtn.addEventListener('click', closeStanleyModal);

// ============================================ // 

// stanford modal
const stanfordModal = document.getElementById('stanfordModal');
// open modal buttons
const stanfordOpenBtn = document.getElementById('stanfordBtn');
// close modal buttons
const stanfordCloseBtn = document.getElementById('stanfordCloseBtn');

// open modal
openStanfordModal = () => {
    stanfordModal.style.display = 'block';
}
// close modal
closeStanfordModal = () => {
    stanfordModal.style.display = 'none'
}
// close modal if user clicks outside of modal
clickStanfordOutside = (e) => {
    if (e.target == stanfordModal) {
        stanfordModal.style.display='none';
    }
}

// event listeners
stanfordOpenBtn.addEventListener('click', openStanfordModal);
stanfordCloseBtn.addEventListener('click', closeStanfordModal);

// ============================================ // 

// window event listener to close modals if there is an outside click
window.addEventListener('click', clickDipperOutside);
window.addEventListener('click', clickMabelOutside);
window.addEventListener('click', clickWendyOutside);
window.addEventListener('click', clickSoosOutside);
window.addEventListener('click', clickStanleyOutside);
window.addEventListener('click', clickStanfordOutside);