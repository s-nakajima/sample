
var NcWysiwyg = angular.module('nc.wysiwyg',
    [
      'ui.bootstrap',
      'ui.tinymce'
    ]
  );

NcWysiwyg.value('NcWysiwygOptions', {
///////////////////
// General
///////////////////

//  auto_focus: true,
//  browser_spellcheck : true,
//  directionality : 'rtl',
//	language : 'ja',
	language_url: '/sample/tinymce_options/langs/ja.js',
//  nowrap : true,
//  object_resizing : 'img',
//  plugins: 'textcolor advlist autolink charmap code link ',
//  plugins: ' ',
	plugins:
    'advlist ' +
		'anchor ' +
//		'autolink ' +
//		'autoresize ' +
//		'autosave ' +
//		'bbcode ' +
//		'charmap ' +
		'code ' +
//		//'colorpicker ' + //From 4.1
//		//'compat3x ' + //From 4.1
//		'contextmenu ' +
//		'directionality ' +
//		'emoticons ' +
//		//'example ' + //Del 4.1
//		//'example_dependency ' + //Del 4.1
//		'fullpage ' +
//		'fullscreen ' +
//		'hr ' +
//		'image ' +
//		'insertdatetime ' +
//		'layer ' +
//		'legacyoutput ' +
//		'link ' +
//		'lists ' +
//		//'importcss ' + //From 4.1
//		'media ' +
//		'nonbreaking ' +
//		'noneditable ' +
//		'pagebreak ' +
//		'paste ' +
//		'preview ' +
//		'print ' +
//		'save ' +
//		'searchreplace ' +
//		'spellchecker ' +
//		'tabfocus ' +
//		'table ' +
//		'template ' +
		'textcolor ' +
//		//'textpattern ' + //From 4.1
//		'visualblocks ' +
//		'visualchars ' +
//		'wordcount'
    ''
  ,

//  selector: 'div.editme',
//  skin : 'tundora',
//  skin_url : '/sample/tinymce_options/skins/tundora',
	theme: 'modern',

  //selector: 'div.editme',
  //inline: true,

  //cache_suffix: "?v=4.1.7"


///////////////////
// Cleanup/Output
///////////////////

//  convert_fonts_to_spans : false,


///////////////////
// User interface
///////////////////

    toolbar:
      //(default)
//        'undo redo | ' +
//        'styleselect | ' +
//        'bold italic | ' +
//        'alignleft aligncenter alignright alignjustify | ' +
//        'bullist numlist outdent indent | ' +

      //(NC)
        'undo redo | ' +
        'cut copy paste | ' +
        'fontselect fontsizeselect styleselect | ' +
        'bold italic underline forecolor backcolor | ' +
        'alignleft aligncenter alignright alignjustify | ' +
        'bullist numlist outdent indent | ' +


//      'newdocument  | ' +
//      'bold  | ' +
//      'italic  | ' +
//      'underline  | ' +
//      'strikethrough  | ' +
//      'alignleft  | ' +
//      'aligncenter  | ' +
//      'alignright  | ' +
//      'alignjustify  | ' +
//      'styleselect  | ' +
//      'formatselect  | ' +
//      'fontselect  | ' +
//      'fontsizeselect  | ' +
//      'cut  | ' +
//      'copy  | ' +
//      'paste  | ' +
//      'bullist  | ' +
//      'numlist  | ' +
//      'outdent  | ' +
//      'indent  | ' +
//      'blockquote  | ' +
//      'undo  | ' +
//      'redo  | ' +
//      'removeformat  | ' +
//      'subscript  | ' +
//      'superscript  | ' +
//      'hr  | ' +
//      'link  | ' +
//      'unlink  | ' +
//      'image  | ' +
//      'charmap  | ' +
//      'pastetext  | ' +
//      'print  | ' +
//      'preview  | ' +
//      'anchor  | ' +
//      'pagebreak  | ' +
//      'spellchecker  | ' +
//      'searchreplace  | ' +
//      'visualblocks  | ' +
//      'visualchars  | ' +
//      'code  | ' +
//      'fullscreen  | ' +
//      'insertdatetime  | ' +
//      'media  | ' +
//      'nonbreaking  | ' +
//      'save  | ' +
//      'cancel  | ' +
//      'table  | ' +
//      'ltr  | ' +
//      'rtl  | ' +
//      'emoticons  | ' +
//      'template  | ' +
//      'forecolor  | ' +
//      'backcolor  | ' +
//      'insertfile  | ' +
      '',

//  mode: 'exact',
  menubar: 'file edit insert view format table tools',

  menu : { // this is the complete default configuration
    //(default)
//      file : {title : 'File'  , items : 'newdocument'},
//      edit : {title : 'Edit'  , items : 'undo redo | cut copy paste pastetext | selectall'},
//      insert : {title : 'Insert', items : 'link media | template hr'},
//      view : {title : 'View'  , items : 'visualaid'},
//      format : {title : 'Format', items : 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
//      table : {title : 'Table' , items : 'inserttable tableprops deletetable | cell row column'},
//      tools : {title : 'Tools' , items : 'spellchecker code'}

    //(NC)
      file : {title : 'File'  , items : 'newdocument'},
      edit : {title : 'Edit'  , items : 'undo redo | cut copy paste pastetext | selectall'},
      insert : {title : 'Insert', items : 'link media | template hr'},
      view : {title : 'View'  , items : 'visualaid'},
      format : {title : 'Format', items : 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
      table : {title : 'Table' , items : 'inserttable tableprops deletetable | cell row column'},
//      tools : {title : 'Tools' , items : 'spellchecker code'}

    //(Test)
      tools : {title : 'Tools' , items :
//        'spellchecker code' +

//        'newdocument ' +
//        'undo ' +
//        'redo ' +
//        'visualaid ' +
//        'cut ' +
//        'copy ' +
//        'paste ' +
//        'selectall ' +
//        'bold ' +
//        'italic ' +
//        'underline ' +
//        'strikethrough ' +
//        'subscript ' +
//        'superscript ' +
//        'removeformat ' +
//        'formats ' +
//        'link ' +
//        'image ' +
//        'charmap ' +
//        'paste ' +
//        'print ' +
//        'preview ' +
//        'hr ' +
//        'anchor ' +
//        'pagebreak ' +
//        'spellchecker ' +
//        'searchreplace ' +
//        'visualblocks ' +
//        'visualchars ' +
//        'code ' +
//        'fullscreen ' +
//        'insertdatetime ' +
//        'media ' +
//        'nonbreaking ' +
//        'inserttable ' +
//        'tableprops ' +
//        'deletetable ' +
//        'cell ' +
//        'row ' +
//        'column' +

        ''
      }
  },

//    toolbar: ' '
//    toolbar: 'undo redo  |' +
//        ' forecolor |' +
//        ' styleselect |' +
//        ' bold italic |' +
//        ' alignleft aligncenter alignright alignjustify |' +
//        ' bullist numlist outdent indent |' +
//        ' link |'

  });

