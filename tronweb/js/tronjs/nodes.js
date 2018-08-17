/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */


class NodeModel extends Backbone.Model {}



class NodePoolModel extends Backbone.Model {}



class NodeInlineView extends Backbone.View {
    constructor(...args) {
        this.render = this.render.bind(this);
        super(...args);
    }

    static initClass() {

        this.prototype.tagName = "span";

        this.prototype.template = _.template(`\
<span class="tt-enable" title="<%= username %>@<%= hostname %>:<%= port %>">
    <%= name %>
</span>\
`
        );
    }

    render() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
}
NodeInlineView.initClass();


class NodePoolInlineView extends Backbone.View {
    constructor(...args) {
        this.render = this.render.bind(this);
        super(...args);
    }

    static initClass() {

        this.prototype.tagName = "span";

        this.prototype.template = _.template(`\
<span class="tt-enable" title="<%= nodes.length %> node(s)">
    <%= name %>
</span>\
`
        );
    }

    render() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
}
NodePoolInlineView.initClass();


window.displayNode = node => new NodeInlineView({model: new NodeModel(node)}).render().$el.html();


window.displayNodePool = pool => new NodePoolInlineView({model: new NodePoolModel(pool)}).render().$el.html();
