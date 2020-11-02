<template>
  <div>
    <b-modal
      id="CreateModal"
      hide-footer
      hide-header
      size="lg"
      title="First Modal"
    >
      <h3 class="mb-4">Add New Post</h3>

      <b-form @submit="onSubmit">
        <b-form-group id="input-group-2" label-for="post-title">
          <b-form-input
            class="mb-3"
            id="post-title"
            v-model="form.newPostTitle"
            required
            placeholder="Post Title"
          ></b-form-input>

          <b-form-textarea
            id="textarea"
            class="mb-3"
            v-model="form.description"
            placeholder="Description Here"
            rows="8"
          ></b-form-textarea>
          <!-- <multiselect
            tag-placeholder="Add this as new tag"
            placeholder="Search or add a tag"
            label="name"
            track-by="code"
            :multiple="true"
            :taggable="true"
          ></multiselect> -->
        </b-form-group>
      </b-form>
      <!-- <b-button v-b-modal.modal-multi-2>Edit category</b-button> -->

      <b-button
        type="submit"
        class="mt-2 mr-2"
        variant="outline-success"
        @click="addPost"
        >Create</b-button
      >
      <b-button class="mt-2" variant="outline-danger" @click="$router.push('/')"
        >Cancel</b-button
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'create',

  data() {
    return {
      form: {
        newPostTitle: '',
        description: '',
      },
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },

    addPost() {
      if (
        this.form.newPostTitle.trim().length == 0 ||
        this.form.description.trim().length == 0
      ) {
        return;
      }
      this.$store.dispatch('addPost', {
        id: Math.random().toString().split('.')[1],
        title: this.form.newPostTitle,
        description: this.form.description,
      });
      this.$bvModal.hide();
      this.$router.push('/');
    },

    // addTag(newTag) {
    //   const tag = {
    //     name: newTag,
    //     code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
    //   };
    //   this.options.push(tag);
    //   this.value.push(tag);
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>
