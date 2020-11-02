<template>
  <div class="all-posts">
    <h2 class="app-title">Vuejs Crud Application</h2>
    <b-button to="/create" class="mb-2 mt-4" v-b-modal.CreateModal
      >Create New Post</b-button
    >
    <!-- <CreateModal /> -->

    <router-view></router-view>

    <!-- <b-modal id="modal-multi-2" title="Second Modal" ok-only>
      <p class="my-2">Second Modal</p>
      <b-button v-b-modal.modal-multi-3 size="sm">Open Third Modal</b-button>
    </b-modal> -->

    <b-container fluid class="p-0">
      <b-row>
        <b-col
          class="mb-3"
          md="6"
          sm="12"
          lg="4"
          xl="4"
          v-for="post in allPosts"
          :key="post.id"
          ><b-card :title="post.title">
            <b-card-text>
              {{ post.description }}
            </b-card-text>

            <b-button
              variant="primary"
              class="mr-2"
              v-b-modal.EditModal
              :to="{ name: 'edit', params: { post_id: post.id } }"
              >Edit</b-button
            >
            <b-button href="#" variant="primary" @click="deletePost(post.id)"
              >Delete</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Index',
  components: {},

  computed: {
    ...mapGetters({ allPosts: 'allPosts' }),
  },

  methods: {
    deletePost(id) {
      this.$store.dispatch('deletePost', id);
    },
  },
};
</script>

<style lang="scss" scoped>
.all-posts {
  width: 70%;
  margin: 0 auto;
}

.app-title {
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 50px;
}
</style>
