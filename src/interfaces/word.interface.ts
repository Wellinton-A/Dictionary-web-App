export interface Word {
  word: string,
  phonetic: string,
  phonetics: [
    {
      text: string,
      audio: string
    }
  ],
  origin: string,
  meanings: [
    {
      partOfSpeech: string,
      definitions: [
        {
          definition: string,
          example: string,
          synonyms: string[],
          antonyms: string[]
        }
      ],
      synonyms: string[]
    },
    {
      partOfSpeech: string,
      definitions: [
        {
          definition: string,
          example: string,
          synonyms: string[],
          antonyms: string[]
        }
      ],
      synonyms: string[]
    }
  ],
  license: {
    name: string,
    url: string
  },
  sourceUrls: string[]
}
