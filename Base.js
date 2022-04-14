AFRAME.registerComponent('base', {
    schema: {
      radius: { type: 'number', default: 150 },
      height: { type: 'number', default: 3 }
    },

    init: function () {
       //Component first attached.
       this.el.getAttribute("geometry", {
          primitive: "cylinder",
          radius: this.data.radius,
          height: this.data.height
       });
       this.el.getAttribute("material", { color: "#1769aa"});
    }
});

