L.Control.Expand = L.Control.extend({
    options: {
        position: 'topleft',
    },

    _collapsed: true,

    onAdd: function (map) {
        var container;

        container = L.DomUtil.create('div', 'leaflet-bar');

        map.expandControl = this;

        if (this._collapsed) {
            this.toggleButton = L.DomUtil.create('a', 'toggle-side-bar collapsed', container);
        } else {
            this.toggleButton = L.DomUtil.create('a', 'toggle-side-bar', container);
        }
        this.toggleButton.href = '#';
        this.toggleButton.title = this.options.titleLeft;
        L.DomEvent.addListener(this.toggleButton, 'click', L.DomEvent.stopPropagation)
            .addListener(this.toggleButton, 'click', L.DomEvent.preventDefault)
            .addListener(this.toggleButton, 'click', this._toggle, map);

        return container;
    },

    _toggle: function () {
        this.expandControl._collapsed = !this.expandControl._collapsed

        if (this.expandControl._collapsed) {
            this.expandControl.toggleButton.title = this.expandControl.options.titleLeft;
            this.expandControl.toggleButton.className = 'toggle-side-bar collapsed';
            $("#left-panel").addClass("collapsed");
        } else {
            this.expandControl.toggleButton.title = this.expandControl.options.titleRight;
            this.expandControl.toggleButton.className = 'toggle-side-bar';
            $("#left-panel").removeClass("collapsed");
        }
    }
});