import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)




const store = new Vuex.Store({
  state: {
    posts: [],
  },
  getters: {
    allPosts(state) {
      console.log(localStorage)
      if (localStorage.length > 0) {
        state.posts = JSON.parse(localStorage.getItem('post-data'))
      }
      return state.posts
    },
  },

  mutations: {
    addPost(state, newPost) {
      state.posts.push({
        id: newPost.id,
        title: newPost.title,
        description: newPost.description
      })

      localStorage.setItem('post-data', JSON.stringify(state.posts))
    },

    editPost(state, post) {
      const index = state.posts.findIndex(item => item.id == post.id)
      state.posts.splice(index, 1, {
        'id': post.id,
        'title': post.title,
        'description': post.description
      })

      localStorage.setItem('post-data', JSON.stringify(state.posts))
    },
    deletePostItem(state, id) {
      const index = state.posts.findIndex(item => item.id == id)
      state.posts.splice(index, 1)
      localStorage.setItem('post-data', JSON.stringify(state.posts))

    },


  },

  actions: {

    addPost(context, post) {
      context.commit('addPost', post)

    },

    editPost(context, post) {
      context.commit('editPost', post)
    },

    deletePost(context, id) {
      context.commit('deletePostItem', id)

    }
  }
})

export default store;