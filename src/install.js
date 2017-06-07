const VueExposeComponentNamesPlugin = {
	install(Vue, options) {
		const config = Object.assign({
			attribute: "data-component-name"
		}, options)

		Vue.mixin({
			mounted() {
				const name = this.$options.name || this.$options._componentTag;
				if(name !== undefined){
					this.$el.setAttribute(config.attribute, name)
				}
			}
		})
	}
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueExposeComponentNamesPlugin)
}

export default VueExposeComponentNamesPlugin