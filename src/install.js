const VueExposeComponentNamesPlugin = {
	install(Vue, options) {
		const config = Object.assign({
			attribute: "data-component-name"
		}, options)

		Vue.mixin({
			mounted() {
				this.$el.setAttribute(config.attribute, this.$options.name || this.$options._componentTag)
			}
		})
	}
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueExposeComponentNamesPlugin)
}

export default VueExposeComponentNamesPlugin