/**
 * Filter an object to remove empty ones
 * @param obj The object to filter
 * @returns The filtered object
 */
export const filterEmpty = (obj: Object) =>
  Object.fromEntries(Object.entries(obj).filter(([_, v]) => v));

/**
 * Remove every duplicated element from a list
 * @param arr The array to remove doublon from
 * @returns The filtered array
 */
export const removeDoublon = (arr: any[]) => arr.filter((x, index) => index === arr.indexOf(x));

/** Utility type for the match result */
type MatchResult = { value: string; source: string; groups?: { [key: string]: string } };
/** Utility type for an expression list */
type ExpressionList = { [key: string]: RegExp };

/**
 * Get the value of a string based on the expression list
 * @param str The string to extract value from
 * @param expressions The list of expressions to tests
 * @returns The matching result or null if no match
 */
export const matchOneExpressions = (
  str: string,
  expressions: ExpressionList
): MatchResult | undefined => {
  /** Loop through each key on the expression list */
  for (const key in expressions) {
    /** Run the regular expression on the string */
    const match = expressions[key].exec(str);

    /** On match returns */
    if (match) {
      return { value: key, source: match[0], groups: match.groups };
    }
  }
  /** Otherwise undefined */
  return undefined;
};

/**
 * Get the values of a string based on an expression list
 * @param str The string to tests with
 * @param expressions The expression list to tests
 * @returns The result of the match or null if no match
 */
export const matchManyExpressions = (
  str: string,
  expressions: ExpressionList
): MatchResult[] | undefined => {
  /** Prepare the list of result */
  const results: MatchResult[] = [];

  /** Loop through the keys */
  for (const key in expressions) {
    /** Run the RegExp on the string */
    const match = expressions[key].exec(str);

    /** Save the match */
    if (match) {
      results.push({ value: key, source: match[0], groups: match.groups });
    }
  }

  /** Check if the list is not empty */
  if (results.length !== 0) {
    return results;
  }

  /** Otherwise return undefined */
  return undefined;
};
