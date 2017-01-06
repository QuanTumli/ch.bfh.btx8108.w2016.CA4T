import {
	LOAD_SCHEMAS,
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
							de: 'Klinische Untersuchung CEA-Titer DE',
							fr: 'Klinische Untersuchung CEA-Titer FR',
							en: 'Klinische Untersuchung CEA-Titer EN'
						},
						start: 3,
						repeatEach: 3,
						end: 12
					},
					{
						id: 'colon-stadium_2_3-cea_titer_2',
						names: {
							de: 'Klinische Untersuchung CEA-Titer DE',
							fr: 'Klinische Untersuchung CEA-Titer FR',
							en: 'Klinische Untersuchung CEA-Titer EN'
						},
						start: 18,
						repeatEach: 6,
						end: 36
					},
					{
						id: 'colon-stadium_2_3-cea_titer_3',
						names: {
							de: 'Klinische Untersuchung CEA-Titer DE',
							fr: 'Klinische Untersuchung CEA-Titer FR',
							en: 'Klinische Untersuchung CEA-Titer EN'
						},
						start:48,
						repeatEach: 12,
						end: 60
					},
					{
						id: 'colon-stadium_2_3-koloskopie_1',
						names: {
							de: 'Koloskopie DE',
							fr: 'Koloskopie FR',
							en: 'Koloskopie EN'
						},
						start:12,
						repeatEach: 12,
						end: 12
					},
					{
						id: 'colon-stadium_2_3-koloskopie_2',
						names: {
							de: 'Koloskopie DE',
							fr: 'Koloskopie FR',
							en: 'Koloskopie EN'
						},
						start:48,
						repeatEach: 12,
						end: 48
					},
					{
						id: 'colon-stadium_2_3-ct_thorax_abdomen',
						names: {
							de: 'CT Thorax-Abdomen DE',
							fr: 'CT Thorax-Abdomen FR',
							en: 'CT Thorax-Abdomen EN'
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
							de: 'CEA-Titer DE',
							fr: 'CEA-Titer FR',
							en: 'CEA-Titer EN'
						},
						start: 12,
						repeatEach: 12,
						end: 24
					},
					{
						id: 'colon-stadium_1-cea_titer_2',
						names: {
							de: 'CEA-Titer DE',
							fr: 'CEA-Titer FR',
							en: 'CEA-Titer EN'
						},
						start: 48,
						repeatEach: 12,
						end: 60
					},
					{
						id: 'colon-stadium_1-koloskopie_1',
						names: {
							de: 'Koloskopie DE',
							fr: 'Koloskopie FR',
							en: 'Koloskopie EN'
						},
						start:12,
						repeatEach: 12,
						end: 12
					},
					{
						id: 'colon-stadium_1-koloskopie_2',
						names: {
							de: 'Koloskopie DE',
							fr: 'Koloskopie FR',
							en: 'Koloskopie EN'
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
							de: 'Klinische Untersuchung CEA-Titer DE',
							fr: 'Klinische Untersuchung CEA-Titer FR',
							en: 'Klinische Untersuchung CEA-Titer EN'
						},
						start: 3,
						repeatEach: 3,
						end: 12
					},
					{
						id: 'rectum-stadium_all-cea_titer_2',
						names: {
							de: 'Klinische Untersuchung CEA-Titer DE',
							fr: 'Klinische Untersuchung CEA-Titer FR',
							en: 'Klinische Untersuchung CEA-Titer EN'
						},
						start: 18,
						repeatEach: 6,
						end: 36
					},
					{
						id: 'rectum-stadium_all-cea_titer_3',
						names: {
							de: 'Klinische Untersuchung CEA-Titer DE',
							fr: 'Klinische Untersuchung CEA-Titer FR',
							en: 'Klinische Untersuchung CEA-Titer EN'
						},
						start:48,
						repeatEach: 12,
						end: 60
					},
					{
						id: 'rectum-stadium_all-koloskopie_1',
						names: {
							de: 'Koloskopie DE',
							fr: 'Koloskopie FR',
							en: 'Koloskopie EN'
						},
						start:12,
						repeatEach: 12,
						end: 12
					},
					{
						id: 'rectum-stadium_all-koloskopie_2',
						names: {
							de: 'Koloskopie DE',
							fr: 'Koloskopie FR',
							en: 'Koloskopie EN'
						},
						start:48,
						repeatEach: 12,
						end: 48
					},
					{
						id: 'rectum-stadium_all-endoskopie_1',
						names: {
							de: 'Untere flexible Endoskopie DE',
							fr: 'Untere flexible Endoskopie FR',
							en: 'Untere flexible Endoskopie EN'
						},
						start:6,
						repeatEach: 12,
						end: 6
					},
					{
						id: 'rectum-stadium_all-endoskopie_2',
						names: {
							de: 'Untere flexible Endoskopie DE',
							fr: 'Untere flexible Endoskopie FR',
							en: 'Untere flexible Endoskopie EN'
						},
						start:18,
						repeatEach: 6,
						end: 24
					},
					{
						id: 'rectum-stadium_all-endosonographie_mri',
						names: {
							de: 'Endosonographie / Becken MRI DE',
							fr: 'Endosonographie / Becken MRI FR',
							en: 'Endosonographie / Becken MRI EN'
						},
						start:6,
						repeatEach: 6,
						end: 24
					},
					{
						id: 'rectum-stadium_all-ct_thorax_abdomen',
						names: {
							de: 'CT Thorax-Abdomen DE',
							fr: 'CT Thorax-Abdomen FR',
							en: 'CT Thorax-Abdomen EN'
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
		case RESET:
    	return initialState
    default:
      return state
  }
}

export default schemes
