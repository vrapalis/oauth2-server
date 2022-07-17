package com.vrapalis.www.libs.oauth2.server.core.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "com.vrapalis.www.libs.oauth2.server.core.domain")
public class OAuth2ServerCoreAutoConfiguration {
}
