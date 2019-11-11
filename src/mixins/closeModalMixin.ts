export default {
  methods: {
    closeModal(id: string): void {
      let modal = <HTMLElement>document.getElementById(id);
      modal.style.display = "none";
    }
  }
};
