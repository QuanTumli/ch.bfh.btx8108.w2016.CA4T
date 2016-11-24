/*
the language translation file

how to translate a string?
the exported string is build up as follows:
{
	de: { // this is the language code for german
		key: 'Text', // here you can translate the string to german
		key2: 'Text 2'
	},
	fr: { // this is the language code for french
		key: 'Text', // here you can translate the string to french
		key2: 'Text 2'
	}
}

It then ca be used as follows in the components:
	I18n.t('key')

*/

export default {
	de: {
		greeting: 'Hallo!',
		meetings: 'Termine',
		documents: 'Dokumente',
		settings: 'Einstellungen',
		addOverviewTitle: 'Neu',
		enterData: 'Eingabe',
		importData: 'Importieren',
		language: 'Sprache',
		de: 'Deutsch',
		en: 'Englisch',
		fr: 'Französisch'
	},
	en: {
		greeting: 'Hi!',
		meetings: 'Meetings',
		documents: 'Documents',
		settings: 'Settings',
		addOverviewTitle: 'New',
		enterData: 'Input',
		importData: 'Import',
		language: 'Language',
		de: 'German',
		en: 'English',
		fr: 'French'
	},
	fr: {
		greeting: 'Bonjour!',
		meetings: 'Calendrier',
		documents: 'Documents',
		settings: 'Réglages',
		addOverviewTitle: 'Nouveau',
		enterData: 'Entrée',
		importData: 'Importer',
		language: 'Langue',
		de: 'Allemand',
		en: 'Anglais',
		fr: 'Français'
	}
}
