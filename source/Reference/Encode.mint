module References {
  const ENCODE =
    <<#MARKDOWN(highlight)
    # Encode Expression

    Since we can decode objects we need to have a way to encode them into
    JavaScript objects as well. The encode expression is the way to do that:

    ```mint
    encode { name: "Bob" } /* Object */
    encode variable /* Object */
    ```

    The `encode` expression tries to encode a typed object into a JavaScript
    object (`Object` type in Mint), in case that it's impossible to do that you
    will get a nice error message.

    The general rule is that you can encode anything that you can decode.
    Encoding data is useful when you want to convert it to JSON:

    ```mint
    Json.stringify(encode { name: "Bob" })
    /* { "name": "Bob"} */
    ```
    MARKDOWN
    |> ContentInstrumenter.instrument
}
