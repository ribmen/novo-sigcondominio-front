export default {
  beforeMount(el) {
    el.addEventListener('input', () => {
      let value = el.value.replace(/\D/g, ''); // Remove non-numeric characters
      value = value.slice(0, 11); // Limit to 11 digits (CPF length without formatting)

      // Apply CPF mask format
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

      el.value = value;
    });
  }
};