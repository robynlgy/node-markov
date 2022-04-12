/** Textual markov chain generator. */

class MarkovMachine {
  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null]
   *  }
   *
   * */

  getChains() {
    let chainsObj = {};

    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i + 1] !== undefined) {
        // if not undefined
        if (chainsObj[this.words[i]]) {
          chainsObj[this.words[i]].push(this.words[i + 1]);
        } else {
          chainsObj[this.words[i]] = [this.words[i + 1]];
        }
      } else {
        if (chainsObj[this.words[i]]) {
          chainsObj[this.words[i]].push(null);
        } else {
          chainsObj[this.words[i]] = [null];
        }
      }
    }

    return chainsObj;
  }

  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!
    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null

    let text = "";

    for (let word in this.chains) {
      let randomNum = Math.floor(Math.random() * this.chains[word].length);
      console.log("randomNum", randomNum);
      let randomWord = this.chains[word][randomNum];
      console.log("randomWord", randomWord);

      text += `${word} ${randomWord} `;
    }

    return text;
  }
}
