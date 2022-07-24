package com.vrapalis.www.libs.oauth2.server.starter.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = {"com.vrapalis.www.libs.oauth2.core"})
public class OAuth2ServerCoreAutoConfiguration {
}
