/** Default Language RegExp definition */
export const ENGLISH_EXP = /\b(english|eng|en|fi)\b/i;
export const FRENCH_EXP = /\b(fr|french|vostfr|vo|vff|vfq|vf2|truefrench|subfrench)\b/i;
export const SPANISH_EXP = /\b(spanish)\b/i;
export const GERMAN_EXP = /\b(german|videomann)\b/i;
export const ITALIAN_EXP = /\b(ita|italian)\b/i;
export const DANISH_EXP = /\b(dk|dan|danish)\b/i;
export const DUTCH_EXP = /\b(nl|dutch)\b/i;
export const JAPANESE_EXP = /\b(japanese)\b/i;
export const CANTONESE_EXP = /\b(cantonese)\b/i;
export const MANDARIN_EXP = /\b(mandarin)\b/i;
export const RUSSIAN_EXP = /\b(russian|rus)\b/i;
export const POLISH_EXP = /\b(polish|pl|pldub)\b/i;
export const VIETNAMESE_EXP = /\b(vietnamese)\b/i;
export const NORDIC_EXP = /\b(nordic|nordicsubs)\b/i;
export const SWEDISH_EXP = /\b(swedish|se|swe)\b/i;
export const NORWEGIAN_EXP = /\b(norwegian|no)\b/i;
export const FINNISH_EXP = /\b(finnish)\b/i;
export const TURKISH_EXP = /\b(turkish)\b/i;
export const PORTUGESE_EXP = /\b(portuguese)\b/i;
export const FLEMISH_EXP = /\b(flemish)\b/i;
export const GREEK_EXP = /\b(greek)\b/i;
export const KOREAN_EXP = /\b(korean)\b/i;
export const HUNGARIAN_EXP = /\b(hungarian|hundub|hun)\b/i;
export const PERSIAN_EXP = /\b(persian)\b/i;
export const BENGALI_EXP = /\b(bengali)\b/i;
export const BULGARIAN_EXP = /\b(bulgarian)\b/i;
export const BRAZILIAN_EXP = /\b(brazilian)\b/i;
export const HEBREW_EXP = /\b(hebrew|HebDub)\b/i;
export const CZECH_EXP = /\b(czech|CZ|SK)\b/i;
export const UKRAINIAN_EXP = /\b(ukrainian|ukr)\b/i;
export const CATALAN_EXP = /\b(catalan)\b/i;
export const CHINESE_EXP = /\b(chinese|chi)\b/i;
export const THAI_EXP = /\b(thai)\b/i;
export const HINDI_EXP = /\b(hindi|hin)\b/i;
export const TAMIL_EXP = /\b(tamil|tam)\b/i;
export const ARABIC_EXP = /\b(arabic)\b/i;
export const ESTONIAN_EXP = /\b(estonian)\b/i;
export const ICELANDIC_EXP = /\b(icelandic|ice)\b/i;
export const LATVIAN_EXP = /\b(latvian)\b/i;
export const LITHUANIAN_EXP = /\b(lithuanian)\b/i;
export const ROMANIAN_EXP = /\b(romanian|ro)\b/i;
export const SLOVAK_EXP = /\b(slovak|sk)\b/i;
export const SERBIAN_EXP = /\b(serbian)\b/i;
export const MULTI_EXP = /(?<!(WEB-))\b(MULTi|DUAL|DL)\b/i;

/** Associate each RegExp with a value */
export const LANGUAGES_EXPS = {
  'english': RegExp([ENGLISH_EXP.source, MULTI_EXP.source].join('|'), 'i'),
  'french': FRENCH_EXP,
  'spanish': SPANISH_EXP,
  'german': GERMAN_EXP,
  'italian': ITALIAN_EXP,
  'danish': DANISH_EXP,
  'dutch': DUTCH_EXP,
  'japanese': JAPANESE_EXP,
  'cantonese': CANTONESE_EXP,
  'mandarin': MANDARIN_EXP,
  'russian': RUSSIAN_EXP,
  'polish': POLISH_EXP,
  'vietnamese': VIETNAMESE_EXP,
  'nordic': NORDIC_EXP,
  'swedish': SWEDISH_EXP,
  'norwegian': NORWEGIAN_EXP,
  'finnish': FINNISH_EXP,
  'turkish': TURKISH_EXP,
  'portuguese': PORTUGESE_EXP,
  'flemish': FLEMISH_EXP,
  'greek': GREEK_EXP,
  'korean': KOREAN_EXP,
  'hungarian': HUNGARIAN_EXP,
  'persian': PERSIAN_EXP,
  'bengali': BENGALI_EXP,
  'bulgarian': BULGARIAN_EXP,
  'brazilian': BRAZILIAN_EXP,
  'hebrew': HEBREW_EXP,
  'czech': CZECH_EXP,
  'ukrainian': UKRAINIAN_EXP,
  'catalan': CATALAN_EXP,
  'chinese': CHINESE_EXP, 'thai': THAI_EXP,
  'hindi': HINDI_EXP,
  'tamil': TAMIL_EXP,
  'arabic': ARABIC_EXP,
  'estonian': ESTONIAN_EXP,
  'icelandic': ICELANDIC_EXP,
  'latvian': LATVIAN_EXP,
  'lithuanian': LITHUANIAN_EXP,
  'romanian': ROMANIAN_EXP,
  'slovak': SLOVAK_EXP,
  'serbian': SERBIAN_EXP
};

/** Utility type */
export type Language = keyof typeof LANGUAGES_EXPS;
