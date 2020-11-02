<template>
  <div>
    <b-modal
      id="EditModal"
      hide-footer
      hide-header
      size="lg"
      title="First Modal"
    >
      <h3 class="mb-4">Edit Post</h3>

      <b-form>
        <b-form-group id="input-group-2" label-for="post-title">
          <b-form-input
            class="mb-3"
            id="post-title"
            v-model="singlePost.title"
            required
            placeholder="Post Title"
          ></b-form-input>

          <b-form-textarea
            id="textarea"
            class="mb-3"
            v-model="singlePost.description"
            placeholder="Description Here"
            rows="8"
          ></b-form-textarea>
        </b-form-group>
      </b-form>
      <b-button
        @click="savePost"
        type="submit"
        class="mt-2 mr-2"
        variant="outline-success"
        >Save</b-button
      >
      <b-button class="mt-2" variant="outline-danger" @click="$router.push('/')"
        >Cancel</b-button
      >
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'edit',
  components: {},

  computed: {
    ...mapGetters(['allPosts']),

    singlePost() {
      return this.allPosts.find(
        (post) => post.id == this.$route.params.post_id
      );
    },
  },
  methods: {
    savePost() {
      if (
        this.singlePost.title.trim().length == 0 ||
        this.singlePost.description.trim().length == 0
      ) {
        return;
      }
      this.$store.dispatch('editPost', this.singlePost);
      this.$bvModal.hide();
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
