import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = resolve => {
  import('views/recommend').then(module => {
    resolve(module)
  })
}

const Singer = resolve => {
  import('views/singer').then(module => {
    resolve(module)
  })
}

const Search = resolve => {
  import('views/search').then(module => {
    resolve(module)
  })
}

const Login = resolve => {
  import('views/userLogin/login').then(module => {
    resolve(module)
  })
}

const Register = resolve => {
  import('views/userlogin/register').then(module => {
    resolve(module)
  })
}

const Rank = resolve => {
  import('views/rank').then(module => {
    resolve(module)
  })
}

const SingerDetail = resolve => {
  import('views/singer/details').then(module => {
    resolve(module)
  })
}

const RecommendDetail = resolve => {
  import('views/recommend/details').then(module => {
    resolve(module)
  })
}

const RankDetail = resolve => {
  import('views/rank/details').then(module => {
    resolve(module)
  })
}

const UserCenter = resolve => {
  import('views/userCenter/userCenter').then(module => {
    resolve(module)
  })
}

const UserFind = resolve => {
  import('views/userCenter/find').then(module => {
    resolve(module)
  })
}

const UserNews = resolve => {
  import('views/userCenter/news').then(module => {
    resolve(module)
  })
}

const UserFirends = resolve => {
  import('views/userCenter/firends').then(module => {
    resolve(module)
  })
}

const UserPreview = resolve => {
  import('views/userCenter/userPreview/userPreview').then(module => {
    resolve(module)
  })
}

const UserComments = resolve => {
  import('views/userCenter/comments').then(module => {
    resolve(module)
  })
}

const UserSkin = resolve => {
  import('views/userCenter/skin').then(module => {
    resolve(module)
  })
}

export default new Router({
  routes: [{
    path: '/',
    redirect: '/recommend',
    name: '主页'
  }, {
    path: '/recommend',
    component: Recommend,
    children: [{
      path: '/recommend/:id',
      component: RecommendDetail
    }]
  }, {
    path: '/singer',
    component: Singer,
    children: [{
      path: '/singer/:id',
      component: SingerDetail
    }]
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/recommend',
    component: Recommend
  }, {
    path: '/singer',
    component: Singer
  }, {
    path: '/register',
    component: Register
  }, {
    path: '/search',
    component: Search,
    children: [{
      path: '/search/:id',
      component: SingerDetail
    }]
  }, {
    path: '/rank',
    component: Rank,
    children: [{
      path: '/rank/:id',
      component: RankDetail
    }]
  }, {
    path: '/social',
    component: UserFind
  }, {
    path: '/user',
    component: UserCenter
  }, {
    path: '/user/news',
    component: UserNews
  }, {
    path: '/user/firends',
    component: UserFirends
  }, {
    path: '/user/user/userPreview',
    component: UserPreview
  }, {
    path: '/user/comments',
    component: UserComments
  }, {
    path: '/user/skin',
    component: UserSkin
  }]
})