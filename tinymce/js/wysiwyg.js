
/**
 * NetCommonsWysiwyg factory
 */
NetCommonsApp.factory('NetCommonsWysiwyg', function() {

  /**
   * tinymce optins
   *
   * @type {{mode: string, menubar: string, plugins: string, toolbar: string}}
   */
  var options = {
	theme: "modern",
    mode: 'exact',
    menubar: ' ',
//    plugins: 'textcolor advlist autolink charmap code link ',
	plugins: 'advlist ' + 
		'anchor ' + 
		'autolink ' + 
		'autoresize ' + 
		'autosave ' + 
		'bbcode ' + 
		'charmap ' + 
		'code ' + 
		//'colorpicker ' + //From 4.1
		//'compat3x ' + //From 4.1
		'contextmenu ' + 
		'directionality ' + 
		'emoticons ' + 
		//'example ' + //Del 4.1
		//'example_dependency ' + //Del 4.1
		'fullpage ' + 
		'fullscreen ' + 
		'hr ' + 
		'image ' + 
		'insertdatetime ' + 
		'layer ' + 
		'legacyoutput ' + 
		'link ' + 
		'lists ' + 
		//'importcss ' + //From 4.1
		'media ' + 
		'nonbreaking ' + 
		'noneditable ' + 
		'pagebreak ' + 
		'paste ' + 
		'preview ' + 
		'print ' + 
		'save ' + 
		'searchreplace ' + 
		'spellchecker ' + 
		'tabfocus ' + 
		'table ' + 
		'template ' + 
		'textcolor ' + 
		//'textpattern ' + //From 4.1
		'visualblocks ' + 
		'visualchars ' + 
		'wordcount',

    toolbar: 'undo redo  |' +
        ' forecolor |' +
        ' styleselect |' +
        ' bold italic |' +
        ' alignleft aligncenter alignright alignjustify |' +
        ' bullist numlist outdent indent |' +
        ' link |'
  };

  return {
    options: options
  };
});
