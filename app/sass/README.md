####################################################################
	SASS -> CSS Folder Structure with examples of scss files
####################################################################


sass/ 
| 
|– base/ 					# Holds what we might call the boilerplate stuff for our project
|   |– _reset.scss       	# Reset/normalize
|	|- _icons.scss 			# Icons SVG or icon fonts
|   |– _typography.scss  	# Typography rules
|   ...                  	# Etc… 
|
|– helpers/ 				# Gathers all Sass tools and helpers we’ll use across the project. Got a function? A mixin? Put it in there.
|   |– _variables.scss   	# Sass Variables 
|   |– _functions.scss   	# Sass Functions 
|   |– _mixins.scss      	# Sass Mixins 
|   |– _helpers.scss     	# Class & placeholders helpers 
|   |– _animations/animate  # Animations
|   |– _grid/index.scss     # Grid system
|   |– _settings.scss       # Font Declarations, Colors, Type Variables
|   ...                  	# Etc… 
|
|– layout/ 					# Contains files, each of them setting some styles for the main sections of the layout (header, footer, and so on)
|   |– _body.scss        	# Body 
|   |– _grid.scss        	# Grid system 
|   |– _header.scss      	# Header 
|   |– _footer.scss      	# Footer 
|   |– _sidebar.scss     	# Sidebar 
|   ...     				# Etc…
|
|– modules/					# Contain all kinds of specific modules like a slider, a loader, a widget, or anything along those lines
|   |– _carousel.scss       # Carousel
|   |– _nav.scss            # Navigation 
|   |– _search-form.scss    # Forms 
|   |– _modals.scss         # Modals
|   |– _tooltips.scss       # Tooltips
|   |– _buttons.scss     	# Buttons 
|   |– _dropdown.scss    	# Dropdown 
|   |– _navigation.scss  	# Navigation 
|   ...                  	# Etc… 
|
|– pages/ 					# Page-specific styles
|   |– _home.scss        	# Home specific styles 
|   |– _contact.scss     	# Contact specific styles 
|   ...                  	# Etc… 
|
|– templates/ 				# Modules stitched together to form pages
|	|– _custom-temp.scss    # Custom Template -- If needed
|   ...                     # Etc… 
| 
|– themes/ 					# You can stuff all your theme/design related styles in there
|   |– _theme.scss       	# Default theme 
|   |– _admin.scss       	# Admin theme 
|	| - _colors.scss 	 	# Specific theme colors also used for specificity
|   ...                  	# Etc… 
| 
|– vendors/ 				# External libraries and frameworks
|   |– _bootstrap.scss   	# Bootstrap 
|   |– _jquery-ui.scss   	# jQuery UI 
|   ...                  	# Etc… 
| 
`– main.scss             # primary Sass file 