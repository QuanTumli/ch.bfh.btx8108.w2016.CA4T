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
		enterOrImportTitle: 'Eingabe / Import',
		selectAfflictionTitle: 'Krankheit',
		selectSchemeTitle: 'Schema',
		selectOpTitle: 'OP Datum',
		checkDataTitle: 'Angabe überprüfen',
		datenschutzHaftungTitle: 'Datenschutz / Haftung',
		enterOrImportHeader: 'Geben Sie neue Daten ein oder importieren Sie Ihre bestehende Daten.',
		selectAfflictionHeader: 'Wo befindet sich der Tumor?',
		selectSchemeHeader: 'Bitte wählen Sie Ihr Schema aus.',
		selectOpHeader: 'Wann wurden Sie operiert?',
		checkDataHeader: 'Bitte überprüfen Sie Ihre angegeben Daten.',
		enterData: 'Eingabe',
		importData: 'Importieren',
		language: 'Sprache',
		de: 'Deutsch',
		en: 'Englisch',
		fr: 'Französisch',
		help: 'Hilfe',
		next: 'Weiter',
		save: 'Speichern',
		colon: 'Kolon',
		rectum: 'Rektum',
		settingsLanguageFooter: 'Hier können Sie die Sprache der App anpassen.',
		chooseDate: 'Datum wählen',
		chosenDate: 'Gewählter Termin: ',
    resetAllSettings: 'Setze alle Einstellungen zurück.',
    resetAllSettingsAlertMessage: 'Wollen Sie die alle Einstellungen wirklich zurücksetzen?',
    resetSchemeSettings: 'Setze Schema Einstellungen zurück.',
    resetSchemeSettingsAlertMessage: 'Wollen Sie die Schema Einstellungen wirklich zurücksetzen?',
	},
	en: {
		greeting: 'Hi!',
		meetings: 'Meetings',
		documents: 'Documents',
		settings: 'Settings',
		enterOrImportTitle: 'Input / Import',
		selectAfflictionTitle: 'Affliction',
		selectSchemeTitle: 'Scheme',
		selectOpTitle: 'OP date',
		checkDataTitle: 'Check information',
		datenschutzHaftungTitle: 'Datenschutz / Haftung',
		enterOrImportHeader: 'Geben Sie neue Daten ein oder importieren Sie Ihre bestehende Daten.',
		selectAfflictionHeader: 'Wo befindet sich der Tumor?',
		selectSchemeHeader: 'Bitte wählen Sie Ihr Schema aus.',
		selectOpHeader: 'Wann wurden Sie operiert?',
		checkDataHeader: 'Bitte überprüfen Sie Ihre angegeben Daten.',
		enterData: 'Input',
		importData: 'Import',
		language: 'Language',
		de: 'German',
		en: 'English',
		fr: 'French',
		help: 'Help',
		next: 'Next',
		save: 'Save',
		colon: 'Colon',
		rectum: 'Rectum',
		settingsLanguageFooter: 'Here you can adapt the language of the app.',
    chooseDate: 'Enter date of operation',
    chosenDate: 'Chosen Date: ',
    resetAllSettings: 'Setze alle Einstellungen zurück.',
    resetAllSettingsAlertMessage: 'Wollen Sie die alle Einstellungen wirklich zurücksetzen?',
    resetSchemeSettings: 'Reset scheme settings',
    resetSchemeSettingsAlertMessage: 'Wollen Sie die Schema Einstellungen wirklich zurücksetzen?',
	},
	fr: {
		greeting: 'Bonjour!',
		meetings: 'Calendrier',
		documents: 'Documents',
		settings: 'Réglages',
		enterOrImportTitle: 'Entrée / Import',
		selectAfflictionTitle: 'Souffrance',
		selectSchemeTitle: 'Procédé',
		selectOpTitle: 'OP date',
		checkDataTitle: 'check information',
		datenschutzHaftungTitle: 'Datenschutz / Haftung',
		enterOrImportHeader: 'Geben Sie neue Daten ein oder importieren Sie Ihre bestehende Daten.',
		selectAfflictionHeader: 'Wo befindet sich der Tumor?',
		selectSchemeHeader: 'Bitte wählen Sie Ihr Schema aus.',
		selectOpHeader: 'Wann wurden Sie operiert?',
		checkDataHeader: 'Bitte überprüfen Sie Ihre angegeben Daten.',
		enterData: 'Entrée',
		importData: 'Importer',
		language: 'Langue',
		de: 'Allemand',
		en: 'Anglais',
		fr: 'Français',
		help: 'Aide',
		next: 'Prochain',
		save: 'Sauvegarder',
		colon: 'Côlon',
		rectum: 'Rectum',
		settingsLanguageFooter: 'Voici vous pouvez adapter la langue de l\'application.',
    chooseDate: 'Entrez votre date d\'operation',
    chosenDate: 'Date choisie: ',
    resetAllSettings: 'Setze alle Einstellungen zurück.',
    resetAllSettingsAlertMessage: 'Wollen Sie die alle Einstellungen wirklich zurücksetzen?',
    resetSchemeSettings: 'Reset scheme settings',
    resetSchemeSettingsAlertMessage: 'Wollen Sie die Schema Einstellungen wirklich zurücksetzen?',
	}
}
