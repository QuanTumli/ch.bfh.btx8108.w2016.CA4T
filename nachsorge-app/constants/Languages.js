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

It then can be used as follows in the components:
	I18n.t('key')

*/

export default {
	de: {
		warning: 'Warnung!',
		meetings: 'Termine',
		documents: 'Dokumente',
		settings: 'Einstellungen',
		meetings: 'Termine',
		export: 'Exportieren',
		import: 'Importieren',
		encryptData: 'Verschlüssle Daten',
		decryptData: 'Entschlüssle Daten',
		password: 'Passwort',
		doctor: 'Arzt',
		doctors: 'Ärzte',
		noDoctors: 'Keine Ärzte vorhanden',
		noDoctorsFound: 'Keine Ärzte gefunden? Bitte auf dem Startbildschirm unter "Ärzte" eintragen.',
		chooseDoctors: 'Arzt auswählen',
		chooseDoctor: 'Hier klicken um Arzt auszuwählen.',
		addDoctor: 'Arzt hinzufügen',
		name: 'Name',
		tel: 'Telefon',
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
		enterOrImportHeader: 'Geben Sie neue Daten ein oder importieren Sie Ihre bestehenden Daten.',
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
		dueIn: 'ist fällig im',
		dueOn: 'ist fällig am',
		de: 'Deutsch',
		en: 'Englisch',
		fr: 'Französisch',
		help: 'Hilfe',
		next: 'Weiter',
		delete: 'Löschen',
		save: 'Speichern',
		cancel: 'Abbrechen',
		ok: 'OK',
		yes: 'Ja',
		no: 'Nein',
		edit: 'Bearbeiten',
		complete: 'Besucht',
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
		tnmTitle: 'TNM',
		tnmHeader: 'Geben Sie Ihr TNM-Stadium ein.',
		stadeWarning: 'Diese App ist für das vorliegende Stadium nicht geeignet. Bitte wenden Sie sich an Ihre Ärztin oder Ihren Arzt.',
		infoHomeScreen: 'Wählen Sie Termine, um Ihre Daten einzugeben. \r\rUnter Einstellungen können Sie die Sprache ändern und weitere Einstellungen tätigen. \r\rUnter Ärzte können Sie die Angaben ihres Arztes hinzufügen.',
		infoSelectAffliction: 'Wählen Sie Kolon, wenn bei Ihnen ein Kolonkarzinom diagnostiziert wurde oder Rektum, wenn bei Ihnen ein Rektumkarzinom diagnostiziert wurde. \r\rInformationen dazu finden Sie auf dem Infoflyer.',
		infoEnterOrImport: 'Wählen Sie Eingabe, um Ihre Daten einzugeben. \r\rWählen Sie Import, um Daten von einem anderen Mobiltelefon zu importieren.',
		infoTnm: 'Geben Sie Ihr TNM-Stadium ein. \r\rInformationen dazu finden Sie auf dem Infoflyer.',
		tunaNotification: 'tuna hat eine neue Benachrichtigung für Sie.',
	},
	en: {
		warning: 'Warning!',
		meetings: 'Meetings',
		documents: 'Documents',
		settings: 'Settings',
		export: 'Export',
		import: 'Import',
		encryptData: 'Encrypt Data',
		decryptData: 'Decrypt Data',
		password: 'Password',
		meetings: 'Meetings',
		doctor: 'Doctor',
		doctors: 'Doctors',
		noDoctors: 'No Doctors found',
		noDoctorsFound: 'No Doctors found? Please enter on the mainscreen under "Doctors"',
		chooseDoctors: 'Choose doctor',
		addDoctor: 'Add new doctor',
		chooseDoctor: 'Click here to choose your doctor',
		name: 'Name',
		tel: 'Phone',
		meetingsCalculated: 'Calculated Meetings',
		meetingsAppointed: 'Appointed Meetings',
		meetingsCompleted: 'Completed Meetings',
		midata: 'Midata',
		temperature: 'Temperature',
		last3Values: 'Last 3 Values',
		midataLogin: 'Midata Login',
		midataLogout: 'Midata Logout',
		enterOrImportTitle: 'Input / Import',
		selectAfflictionTitle: 'Affliction',
		selectSchemeTitle: 'Scheme',
		selectOpTitle: 'OP date',
		selectKoloskopieTitle: 'Colonoscopy performed completely',
		checkDataTitle: 'Check information',
		datenschutzHaftungTitle: 'Data Protection / Liability',
		enterOrImportHeader: 'Enter your dates or import them.',
		selectAfflictionHeader: 'Where is the Tumor?',
		selectSchemeHeader: 'Please choose your scheme.',
		selectOpHeader: 'When was the operation?',
		selectKoloskopieHeader: 'Was the Colonoscopy performed completely?',
		checkDataHeader: 'Please check your data.',
		midataLoginText: 'Login to midata.coop',
		midataSend: 'Send',
		enterData: 'Input',
		importData: 'Import',
		language: 'Language',
		dueIn: 'is due in',
		dueOn: 'is due on',
		de: 'German',
		en: 'English',
		fr: 'French',
		help: 'Help',
		next: 'Next',
		delete: 'Delete',
		save: 'Save',
		cancel: 'Cancel',
		ok: 'OK',
		yes: 'Yes',
		no: 'No',
		edit: 'Edit',
		complete: 'Visited',
		colon: 'Colon',
		rectum: 'Rectum',
		settingsLanguageFooter: 'Here you can adapt the language of the app.',
    chooseDate: 'Enter date of operation',
    chosenDate: 'Chosen Date: ',
    resetAllSettings: 'Reset all settings.',
    resetAllSettingsAlertMessage: 'Do you really want to reset all settings?',
    resetSchemeSettings: 'Reset scheme settings',
    resetSchemeSettingsAlertMessage: 'Do you really want to reset the scheme settings?',
		meetingDetailHeader: 'Meeting overview',
    meetingDetailWhat: 'What',
    meetingDetailWhatKoloskopie: 'Colonoscopy',
    meetingDetailWhen: 'When',
		tnmTitle: 'TNM',
		tnmHeader: 'Enter TNM Stade.',
		stadeWarning: 'This app is for the selected Stade not suited. Please refer to your doctor.',
		infoHomeScreen: 'Select appointments to enter your details. Under Settings you can change the language and make further settings.',
		infoSelectAffliction: 'Choose colon if you have a colon carcinoma diagnosed or rectum, If you have a rectal carcinoma diagnosed. Information You at the Infoflyer.',
		infoEnterOrImport: 'Select Input to enter your data or import to data from another mobile phone.',
		infoTnm: 'Enter your TNM stage. You can find the information for this on the Infoflyer.',
		tunaNotification: 'tuna has a new notification for you.',
	},
	fr: {
		warning: 'Attention!',
		meetings: 'Calendrier',
		documents: 'Documents',
		settings: 'Réglages',
		export: 'Exporter',
		import: 'Importer',
		encryptData: 'Encrypter données',
		decryptData: 'Decrypter données',
		password: 'Mot de passe',
		meetings: 'Calandrier',
		doctor: 'Docteur',
		doctors: 'Docteurs',
		noDoctors: 'Pas de docteurs trouvé',
		noDoctorsFound: 'Pas de docteurs trouvé? Entrez s.v.p. un sur le homescreen sous "Docteurs"',
		chooseDoctors: 'Choisir docteur',
		chooseDoctor: 'Cliquez ici pour choisir un docteur.',
		addDoctor: 'Ajouter docteur',
		name: 'Nom',
		tel: 'Téléphone',
		meetingsCalculated: 'Dates calculées',
		meetingsAppointed: 'Dates fixées',
		meetingsCompleted: 'Dates passées',
		midata: 'Midata',
		temperature: 'Temperatur',
		last3Values: 'Dernier 3 éléments',
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
		midataLoginText: 'Login chez midata.coop',
		midataSend: 'Envoyer',
		enterData: 'Entrée',
		importData: 'Importer',
		language: 'Langue',
		dueIn: 'est échéant en',
		dueOn: 'est échéant le',
		de: 'Allemand',
		en: 'Anglais',
		fr: 'Français',
		help: 'Aide',
		next: 'Prochain',
		delete: 'Supprimer',
		save: 'Sauvegarder',
		edit: 'Éditer',
		cancel: 'Annuler',
		ok: 'OK',
		yes: 'Oui',
		no: 'Non',
		complete: 'Visité',
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
  	meetingDetailWhat: 'Quoi',
    meetingDetailWhatKoloskopie: 'Koloskopie',
    meetingDetailWhen: 'Quand',
		tnmTitle: 'TNM',
		tnmHeader: 'Choisissez votre TNM',
		stadeWarning: 'Diese App ist für das vorliegende Stadium nicht geeignet. Bitte wenden Sie sich an Ihre Ärztin oder Ihren Arzt.',
		infoHomeScreen: 'Choisissez la date pour entrer vos données. Dans les paramètres, vous pouvez changer la langue et d autres paramètres.',
		infoSelectAffliction: 'Sélectionnez le côlon, si vous avez un cancer du côlon a été diagnostiqué ou du rectum, si vous avez eu un cancer du rectum a été diagnostiqué. trouver des informations Sur l Info Flyer.',
		infoEnterOrImport: 'Sélectionnez Entrée pour entrer vos données ou les données de commande d importation à partir d un d importer d autres téléphones mobiles.',
		infoTnm: 'Entrez votre stade TNM. Vous trouverez des informations sur l Info Flyer.',
		tunaNotification: 'tuna a une nouvelle notification pour vous.',
	}
}
