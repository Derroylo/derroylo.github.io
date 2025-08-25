::: danger
This Documentation is currently being rewritten for WebDev, which is the successor of GPT (for which this docs have been written), as Gitpod Classic will be shutdown in the next few weeks.

The Release of WebDev is currently planned within the first two weeks of september.
:::

# xdebug.mode = develop

This mode enables the development helpers of Xdebug and shows for example a better formatted `var_dump()` output or a more detailed Stacktrace. Since many PHP frameworks, like Symfony, have their own development tools included, this doesn´t get used much anymore. These tools are usually available once you put the site into "dev" mode where you can get a detailed stacktrace or special commands like `dump()` or `dd` which prettify the `var_dump()` output.

If you´re not using a framework, or using one without that functionality, you can find out more about this mode in the [official documentation](https://xdebug.org/docs/develop).