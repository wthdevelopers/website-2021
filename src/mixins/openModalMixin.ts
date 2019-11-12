export default {
  methods: {
    openModal(id: string): void {
      let modal = <HTMLElement>document.getElementById(id);
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  }
};
