import requests from '@/api/request';
export default {
	state: {
		val1: 'val1',
		val2: 'val2',
		val3: 'val3',
		val4: 'val4',
		githubUserInfo: {},
		inputArr: [],
	},
	mutations: {
		mutationAdd1(state, payload) {
			console.log('mutationAdd1 state', state, 'mutationAdd1 payload', payload);
		},
		mutationAdd2(state, payload) {
			console.log('mutationAdd2 state', state, 'mutationAdd2 payload', payload);
		},
		mutationAdd3(state, payload) {
			console.log('mutationAdd3 state', state, 'mutationAdd3 payload', payload);
		},
		githubUserInfo(state, payload) {
			state.githubUserInfo = payload
		}
	},
	actions: {
		//context action的上下文：{ commit, dispatch, getters, rootGetters, rootState, state }
		//getters === rootGetters true
		//rootGetters 是所有getter的集合
		//rootState 是根 仓库的数据集合
		async getGithubUser({ commit }, username) {
			const res = await requests({
				url: `/api/user/login?username=andy&password=123`,
				method: 'post'
			});
			commit('githubUserInfo', res);
		},
		actionAdd1(context) {
			console.log('actionAdd1 params', 'actionAdd1 context', context);
			console.log('is getters === rootGetters ?', context.getters === context.rootGetters);
		},
		actionAdd2(context) {
			console.log('actionAdd2 params', 'actionAdd1 context', context);
		},
		actionAdd3(context) {
			console.log('actionAdd2 params', 'actionAdd1 context', context);
		}
	},
	getters: {
		//state:数据 ， getters: getter组成的对象
		getter1(state, getters) {
			console.log('getter1 state', state, 'getter1 getters', getters);
			return 'getter1 value';
		},
		getter2(state, getters) {
			console.log('getter2 state', state, 'getter2 getters', getters);
			return 'getter2 value';
		},
		getter3(state, getters) {
			console.log('getter3 state', state, 'getter3 getters', getters);
			return 'getter3 value';
		}
	}
};
