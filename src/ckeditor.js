/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat'
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder'
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter'
import Code from '@ckeditor/ckeditor5-basic-styles/src/code'
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock'
// import Comments from '@ckeditor/ckeditor5-comments/src/comments' // 评论
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor'
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor'
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily'
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize'
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
// import Title from '@ckeditor/ckeditor5-heading/src/title' // 标题
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight'
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage'
import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
import Indent from '@ckeditor/ckeditor5-indent/src/indent'
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock'
import Link from '@ckeditor/ckeditor5-link/src/link'
import List from '@ckeditor/ckeditor5-list/src/list'
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed'
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice'
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript'
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js'
import Table from '@ckeditor/ckeditor5-table/src/table'
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties'
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation'
// import TrackChanges from '@ckeditor/ckeditor5-track-changes/src/trackchanges' // 跟踪更改

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Alignment,
	Autoformat,
	Autosave,
	BlockQuote,
	Bold,
	Italic,
	Strikethrough,
	Superscript,
	Subscript,
	Underline,
	Code,
	CodeBlock,
	// Comments,
	CKFinder,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	EasyImage,
	Heading,
	// Title,
	Highlight,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Link,
	List,
	MediaEmbed,
	MediaEmbedToolbar,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	Table,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	TextTransformation,
	WordCount
	// TrackChanges
]

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'CKFinder',
			'alignment',
			// 'comment', 评论
			'codeBlock',
			'code',
			'fontBackgroundColor',
			'fontColor',
			'fontSize',
			'fontFamily',
			'horizontalLine',
			'highlight',
			'MathType',
			'ChemType',
			'pageBreak',
			'restrictedEditing',
			'removeFormat',
			'specialCharacters',
			'strikethrough',
			'superscript',
			'subscript',
			'underline',
			'trackChanges',
			'todoList',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'imageStyle:alignLeft',
			'imageStyle:alignCenter',
			'imageStyle:alignRight',
			'|',
			'imageTextAlternative'
		]
	},
	// licenseKey: '',
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
			'tableProperties'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'zh-cn'
}
