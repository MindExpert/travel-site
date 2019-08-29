import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButtton = $(".modal__close");
		this.events();
	}

	events() {
		// clicking the open Modal
		this.openModalButton.click(this.openModal.bind(this));

		// clicling the x close modal button
		this.closeModalButtton.click(this.closeModal.bind(this));

		// pushes escape key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) { 
		if(e.keyCode == 27){ // if value of pressed key is 27 (Vale of Escape Key)
			this.closeModal(); 
		} 
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false; //will prevent that default Behaviour on click of going up.
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}

}

export default Modal;