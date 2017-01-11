import {
	LOAD_SCHEMAS,
	MIDATA_GET_EXPORT_SUCCESS,
	RESET
} from '../actions'

const initialState = {
	colon: {
		names: {
			de: 'Kolon',
			fr: 'côlon',
			en: 'colon'
		},
		schemes: [
			{
				id: 'colon-stadium_2_3',
				names: {
					de: 'Stadium II + III',
					fr: 'étape II + III',
					en: 'stage II + III'
				},
				checks: [
					{
						id: 'colon-stadium_2_3-cea_titer_1',
						names: {
							de: 'Klinische Untersuchung CEA-Titer',
							fr: 'examen clinique CEA-Titer',
							en: 'clinical examination CEA-Titer'
						},
						start: 3,
						repeatEach: 3,
						end: 12
					},
					{
						id: 'colon-stadium_2_3-cea_titer_2',
						names: {
							de: 'Klinische Untersuchung CEA-Titer',
							fr: 'examen clinique CEA-Titer',
							en: 'clinical examination CEA-Titer'
						},
						start: 18,
						repeatEach: 6,
						end: 36
					},
					{
						id: 'colon-stadium_2_3-cea_titer_3',
						names: {
							de: 'Klinische Untersuchung CEA-Titer',
							fr: 'examen clinique CEA-Titer',
							en: 'clinical examination CEA-Titer'
						},
						start:48,
						repeatEach: 12,
						end: 60
					},
					{
						id: 'colon-stadium_2_3-koloskopie_1',
						names: {
							de: 'Koloskopie',
							fr: 'coloscopie',
							en: 'colonoscopy'
						},
						start:12,
						repeatEach: 12,
						end: 12
					},
					{
						id: 'colon-stadium_2_3-koloskopie_2',
						names: {
							de: 'Koloskopie',
							fr: 'coloscopie',
							en: 'colonoscopy'
						},
						start:48,
						repeatEach: 12,
						end: 48
					},
					{
						id: 'colon-stadium_2_3-ct_thorax_abdomen',
						names: {
							de: 'CT Thorax-Abdomen',
							fr: 'CT Thorax-Abdomen',
							en: 'CT Thorax-Abdomen'
						},
						start:12,
						repeatEach: 12,
						end: 60
					}
				]
			},
			{
				id: 'colon-stadium_1',
				names: {
					de: 'Stadium I',
					fr: 'étape I',
					en: 'stage I'
				},
				checks: [
					{
						id: 'colon-stadium_1-cea_titer_1',
						names: {
							de: 'Klinische Untersuchung CEA-Titer',
							fr: 'examen clinique CEA-Titer',
							en: 'clinical examination CEA-Titer'
						},
						start: 12,
						repeatEach: 12,
						end: 24
					},
					{
						id: 'colon-stadium_1-cea_titer_2',
						names: {
							de: 'Klinische Untersuchung CEA-Titer',
							fr: 'examen clinique CEA-Titer',
							en: 'clinical examination CEA-Titer'
						},
						start: 48,
						repeatEach: 12,
						end: 60
					},
					{
						id: 'colon-stadium_1-koloskopie_1',
						names: {
							de: 'Koloskopie',
							fr: 'coloscopie',
							en: 'colonoscopy'
						},
						start:12,
						repeatEach: 12,
						end: 12
					},
					{
						id: 'colon-stadium_1-koloskopie_2',
						names: {
							de: 'Koloskopie',
							fr: 'coloscopie',
							en: 'colonoscopy'
						},
						start:48,
						repeatEach: 12,
						end: 48
					}
				]
			}
		]
	},
	rectum: {
		names: {
			de: 'Rektum',
			fr: 'rectum',
			en: 'rectum'
		},
		schemes: [
			{
				id: 'rectum-stadium_all',
				names: {
					de: 'Alle Stadien',
					fr: 'tous étapes',
					en: 'all stages'
				},
				checks: [
					{
						id: 'rectum-stadium_all-cea_titer_1',
						names: {
							de: 'Klinische Untersuchung CEA-Titer',
							fr: 'examen clinique CEA-Titer',
							en: 'clinical examination CEA-Titer'
						},
						start: 3,
						repeatEach: 3,
						end: 12
					},
					{
						id: 'rectum-stadium_all-cea_titer_2',
						names: {
							de: 'Klinische Untersuchung CEA-Titer',
							fr: 'examen clinique CEA-Titer',
							en: 'clinical examination CEA-Titer'
						},
						start: 18,
						repeatEach: 6,
						end: 36
					},
					{
						id: 'rectum-stadium_all-cea_titer_3',
						names: {
							de: 'Klinische Untersuchung CEA-Titer',
							fr: 'examen clinique CEA-Titer',
							en: 'clinical examination CEA-Titer'
						},
						start:48,
						repeatEach: 12,
						end: 60
					},
					{
						id: 'rectum-stadium_all-koloskopie_1',
						names: {
							de: 'Koloskopie',
							fr: 'coloscopie',
							en: 'colonoscopy'
						},
						start:12,
						repeatEach: 12,
						end: 12
					},
					{
						id: 'rectum-stadium_all-koloskopie_2',
						names: {
							de: 'Koloskopie',
							fr: 'coloscopie',
							en: 'colonoscopy'
						},
						start:48,
						repeatEach: 12,
						end: 48
					},
					{
						id: 'rectum-stadium_all-endoskopie_1',
						names: {
							de: 'Untere flexible Endoskopie',
							fr: 'l\'endoscopie flexible inférieure',
							en: 'Flexible endoscopy of bottom'
						},
						start:6,
						repeatEach: 12,
						end: 6
					},
					{
						id: 'rectum-stadium_all-endoskopie_2',
						names: {
							de: 'Untere flexible Endoskopie',
							fr: 'l\'endoscopie flexible inférieure',
							en: 'Flexible endoscopy of bottom'
						},
						start:18,
						repeatEach: 6,
						end: 24
					},
					{
						id: 'rectum-stadium_all-endosonographie_mri',
						names: {
							de: 'Endosonographie / Becken MRI',
							fr: 'Endosonographie / pelvis MRI',
							en: 'Endosonography / pelvis MRI'
						},
						start:6,
						repeatEach: 6,
						end: 24
					},
					{
						id: 'rectum-stadium_all-ct_thorax_abdomen',
						names: {
							de: 'CT Thorax-Abdomen',
							fr: 'CT Thorax-Abdomen',
							en: 'CT Thorax-Abdomen'
						},
						start:12,
						repeatEach: 12,
						end: 60
					}
				]
			}
		]
	}
}

const schemes = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SCHEMAS:
      return action.schemes
		case MIDATA_GET_EXPORT_SUCCESS:
			return action.data.schemes
		case RESET:
    	return initialState
    default:
      return state
  }
}

export default schemes
