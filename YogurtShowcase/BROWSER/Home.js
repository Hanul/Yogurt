YogurtShowcase.Home = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {

		TITLE('Yogurt Toolbar.');

		let wrapper = Yogurt.Wrapper({
			c : [

			// toolbar
			Yogurt.Toolbar({

				// title
				title : 'Yogurt!'
			}),

			// content
			DIV({
				style : {
					padding : 20
				},
				c : [IMG({
					style : {
						display : 'block',
						maxWidth : '100%'
					},
					src : YogurtShowcase.R('yogurt.jpg')
				}), P({
					style : {
						marginTop : 20
					},
					c : ['Welcome to Yogurt Showcase.\nYogurt is ', A({
						style : {
							color : '#0366d6'
						},
						href : 'http://uppercase.io',
						target : '_blank',
						c : 'UPPERCASE'
					}), '-Based UI Framework.']
				}), UL({
					style : {
						marginTop : 20
					},
					c : RUN(() => {

						let array = [];

						EACH([{
							title : 'Toolbar',
							uri : 'Toolbar'
						}, {
							title : 'Button',
							uri : 'Button'
						}, {
							title : 'Form',
							uri : 'Form'
						}, {
							title : 'Alert',
							uri : 'Alert'
						}, {
							title : 'Prompt',
							uri : 'Prompt'
						}, {
							title : 'Confirm',
							uri : 'Confirm'
						}, {
							title : 'Menu Layout',
							uri : 'MenuLayout'
						}, {
							title : 'Bottom Bar',
							uri : 'BottomBar'
						}, {
							title : 'Slider',
							uri : 'Slider'
						}, {
							title : 'Calendar',
							uri : 'Calendar'
						}], (data, i) => {

							array.push(Yogurt.Button({
								style : {
									marginTop : i === 0 ? 0 : 15
								},
								title : data.title + (data.todo === true ? ' (TODO)' : ''),
								on : {
									tap : () => {
										if (data.todo === true) {
											Yogurt.Alert('Working...');
										} else {
											YogurtShowcase.GO(data.uri);
										}
									}
								}
							}));
						});

						return array;
					})
				})]
			})]
		}).appendTo(BODY);

		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
