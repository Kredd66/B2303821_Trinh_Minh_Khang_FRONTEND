<template>
  <div class="page">
    <h4>Thêm Liên hệ</h4>
    <ContactForm
      :contact="contact"
      @submit:contact="addContact"
    />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      // Tạo một đối tượng liên hệ trống để bind vào form
      contact: {
        name: "",
        email: "",
        address: "",
        phone: "",
        favorite: false
      },
      message: "",
    };
  },
  methods: {
    async addContact(data) {
      try {
        await ContactService.create(data);
        alert('Liên hệ được thêm mới thành công.');
        this.$router.push({ name: "contactbook" }); // Quay về trang chủ
      } catch (error) {
        console.log(error);
        this.message = "Đã xảy ra lỗi khi thêm liên hệ.";
      }
    },
  },
};
</script>