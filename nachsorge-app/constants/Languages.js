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
		meetings: 'Termine',
		meetingsCalculated: 'Berechnete Termine',
		meetingsAppointed: 'Vereinbarte Termine',
		meetingsCompleted: 'Vergangene Termine',
		midata: 'Midata',
		temperature: 'Temperatur',
		last3Values: 'Letzte 3 Elemente',
		midataLogin: 'Midata Login',
		midataLogout: 'Midata Logout',
		enterOrImportTitle: 'Eingabe / Import',
		selectAfflictionTitle: 'Krankheit',
		selectSchemeTitle: 'Schema',
		selectOpTitle: 'OP Datum',
		selectKoloskopieTitle: 'Vollst. Koloskopie',
		checkDataTitle: 'Angabe überprüfen',
		datenschutzHaftungTitle: 'Datenschutz / Haftung',
		enterOrImportHeader: 'Geben Sie neue Daten ein oder importieren Sie Ihre bestehende Daten.',
		selectAfflictionHeader: 'Wo befindet sich der Tumor?',
		selectSchemeHeader: 'Bitte wählen Sie Ihr Schema aus.',
		selectOpHeader: 'Wann wurden Sie operiert?',
		selectKoloskopieHeader: 'Wurde bereits eine vollständige Koloskopie durchgeführt?',
		checkDataHeader: 'Bitte überprüfen Sie Ihre angegeben Daten.',
		midataLoginText: 'Login bei midata.coop',
		midataSend: 'Senden',
		enterData: 'Eingabe',
		importData: 'Importieren',
		language: 'Sprache',
		de: 'Deutsch',
		en: 'Englisch',
		fr: 'Französisch',
		help: 'Hilfe',
		next: 'Weiter',
		save: 'Speichern',
		yes: 'Ja',
		no: 'Nein',
		edit: 'Bearbeiten',
		complete: 'Fertig',
		colon: 'Kolon',
		rectum: 'Rektum',
		settingsLanguageFooter: 'Hier können Sie die Sprache der App anpassen.',
		chooseDate: 'Datum wählen',
		chosenDate: 'Gewählter Termin: ',
    resetAllSettings: 'Setze alle Einstellungen zurück.',
    resetAllSettingsAlertMessage: 'Wollen Sie die alle Einstellungen wirklich zurücksetzen?',
    resetSchemeSettings: 'Setze Schema Einstellungen zurück.',
    resetSchemeSettingsAlertMessage: 'Wollen Sie die Schema Einstellungen wirklich zurücksetzen?',
		meetingDetailHeader: 'Terminübersicht',
		meetingDetailWhat: 'Was',
		meetingDetailWhatKoloskopie: 'Koloskopie',
		meetingDetailWhen: 'Wann',

infoHomeScreen: 'Wählen Sie Termine, um Ihre Daten einzugeben. Unter Einstellungen können Sie die Sprache ändern und weitere Einstellungen tätigen.',
infoSelectAffliction: 'Wählen Sie Kolon, wenn bei Ihnen ein Kolonkarzinom diagnostiziert wurde oder Rektum,wenn bei Ihnen ein Rektumkarzinom diagnostiziert wurde. Informationen dazu findenSie auf dem Infoflyer.',
infoEnterOrImport: 'Wählen Sie Input, um Ihre Daten einzugeben oder Import, um Daten von einemanderen Mobiltelefon zu importieren.',
infoTnm: 'Geben Sie Ihr TNM-Stadium ein. Informationen dazu finden Sie auf dem Infoflyer.',



	},
	en: {
		greeting: 'Hi!',
		meetings: 'Meetings',
		documents: 'Documents',
		settings: 'Settings',
		meetings: 'Meetings',
		meetingsCalculated: 'Berechnete Termine',
		meetingsAppointed: 'Vereinbarte Termine',
		meetingsCompleted: 'Vergangene Termine',
		midata: 'Midata',
		temperature: 'Temperatur',
		last3Values: 'Letzte 3 Elemente',
		midataLogin: 'Midata Login',
		midataLogout: 'Midata Logout',
		enterOrImportTitle: 'Input / Import',
		selectAfflictionTitle: 'Affliction',
		selectSchemeTitle: 'Scheme',
		selectOpTitle: 'OP date',
		selectKoloskopieTitle: 'Vollständige Koloskopie durchgeführt',
		checkDataTitle: 'Check information',
		datenschutzHaftungTitle: 'Datenschutz / Haftung',
		enterOrImportHeader: 'Geben Sie neue Daten ein oder importieren Sie Ihre bestehende Daten.',
		selectAfflictionHeader: 'Wo befindet sich der Tumor?',
		selectSchemeHeader: 'Bitte wählen Sie Ihr Schema aus.',
		selectOpHeader: 'Wann wurden Sie operiert?',
		selectKoloskopieHeader: 'Wurde bereits eine vollständige Koloskopie durchgeführt?',
		checkDataHeader: 'Bitte überprüfen Sie Ihre angegeben Daten.',
		midataLoginText: 'Login bei midata.coop',
		midataSend: 'Senden',
		enterData: 'Input',
		importData: 'Import',
		language: 'Language',
		de: 'German',
		en: 'English',
		fr: 'French',
		help: 'Help',
		next: 'Next',
		save: 'Save',
		yes: 'Ja',
		no: 'Nein',
		edit: 'Edit',
		complete: 'Fertig',
		colon: 'Colon',
		rectum: 'Rectum',
		settingsLanguageFooter: 'Here you can adapt the language of the app.',
    chooseDate: 'Enter date of operation',
    chosenDate: 'Chosen Date: ',
    resetAllSettings: 'Setze alle Einstellungen zurück.',
    resetAllSettingsAlertMessage: 'Wollen Sie die alle Einstellungen wirklich zurücksetzen?',
    resetSchemeSettings: 'Reset scheme settings',
    resetSchemeSettingsAlertMessage: 'Wollen Sie die Schema Einstellungen wirklich zurücksetzen?',
		meetingDetailHeader: 'Terminübersicht',
    meetingDetailWhat: 'What',
    meetingDetailWhatKoloskopie: 'Koloskopie',
    meetingDetailWhen: 'When',

infoHomeScreen: 'Select appointments to enter your details. Under Settings you can change the language and make further settings.',
infoSelectAffliction: 'Choose colon if you have a colon carcinoma diagnosed or rectum, If you have a rectal carcinoma diagnosed. Information You at the Infoflyer.',
infoEnterOrImport: 'Wählen Sie Input, um Ihre Daten einzugeben oder Import, um Daten von einemanderen Mobiltelefon zu importieren.',
infoTnm: 'Enter your TNM stage. You can find information on this at the Infoflyer.',


	},
	fr: {
		greeting: 'Bonjour!',
		meetings: 'Calendrier',
		documents: 'Documents',
		settings: 'Réglages',
		meetings: 'Calandrier',
		meetingsCalculated: 'Berechnete Termine',
		meetingsAppointed: 'Vereinbarte Termine',
		meetingsCompleted: 'Vergangene Termine',
		midata: 'Midata',
		temperature: 'Temperatur',
		last3Values: 'Letzte 3 Elemente',
		midataLogin: 'Midata Login',
		midataLogout: 'Midata Logout',
		enterOrImportTitle: 'Entrée / Import',
		selectAfflictionTitle: 'Souffrance',
		selectSchemeTitle: 'Procédé',
		selectOpTitle: 'OP date',
		selectKoloskopieTitle: 'Vollständige Koloskopie durchgeführt',
		checkDataTitle: 'check information',
		datenschutzHaftungTitle: 'Datenschutz / Haftung',
		enterOrImportHeader: 'Geben Sie neue Daten ein oder importieren Sie Ihre bestehende Daten.',
		selectAfflictionHeader: 'Wo befindet sich der Tumor?',
		selectSchemeHeader: 'Bitte wählen Sie Ihr Schema aus.',
		selectOpHeader: 'Wann wurden Sie operiert?',
		selectKoloskopieHeader: 'Wurde bereits eine vollständige Koloskopie durchgeführt?',
		checkDataHeader: 'Bitte überprüfen Sie Ihre angegeben Daten.',
		midataLoginText: 'Login bei midata.coop',
		midataSend: 'Senden',
		enterData: 'Entrée',
		importData: 'Importer',
		language: 'Langue',
		de: 'Allemand',
		en: 'Anglais',
		fr: 'Français',
		help: 'Aide',
		next: 'Prochain',
		save: 'Sauvegarder',
		edit: 'Éditer',
		yes: 'Ja',
		no: 'Nein',
		complete: 'Fertig',
		colon: 'Côlon',
		rectum: 'Rectum',
		settingsLanguageFooter: 'Voici vous pouvez adapter la langue de l\'application.',
    chooseDate: 'Entrez votre date d\'operation',
    chosenDate: 'Date choisie: ',
    resetAllSettings: 'Setze alle Einstellungen zurück.',
    resetAllSettingsAlertMessage: 'Wollen Sie die alle Einstellungen wirklich zurücksetzen?',
    resetSchemeSettings: 'Reset scheme settings',
    resetSchemeSettingsAlertMessage: 'Wollen Sie die Schema Einstellungen wirklich zurücksetzen?',
		meetingDetailHeader: 'Terminübersicht',
  	meetingDetailWhat: 'Was',
    meetingDetailWhatKoloskopie: 'Koloskopie',
    meetingDetailWhen: 'Wann',

		infoHomeScreen: 'Choisissez la date pour entrer vos données. Dans les paramètres, vous pouvez changer la langue et d autres paramètres.',
infoSelectAffliction: 'Sélectionnez le côlon, si vous avez un cancer du côlon a été diagnostiqué ou du rectum, si vous avez eu un cancer du rectum a été diagnostiqué. trouver des informations Sur l Info Flyer.',
infoEnterOrImport: 'Wählen Sie Input, um Ihre Daten einzugeben oder Import, um Daten von einemanderen Mobiltelefon zu importieren.',
infoTnm: 'Entrez votre stade TNM. Vous trouverez des informations sur l Info Flyer.',



	}
}
