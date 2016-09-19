package io.redbee.boot.oauth;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.web.authentication.preauth.AbstractPreAuthenticatedProcessingFilter;
import org.springframework.web.bind.annotation.SessionAttributes;

import io.redbee.boot.oauth.config.LoginConfig;
import io.redbee.boot.oauth.config.OAuth2AuthorizationConfig;

@SpringBootApplication
@SessionAttributes("authorizationRequest")
@EnableResourceServer
@ImportAutoConfiguration({OAuth2AuthorizationConfig.class, LoginConfig.class})
public class BootOauth2Application extends ResourceServerConfigurerAdapter {

	public static void main(String[] args) {
		SpringApplication.run(BootOauth2Application.class, args);
	}
	
	 @Override
	    public void configure(HttpSecurity http) throws Exception {

	        http
	            .sessionManagement()
	            .sessionCreationPolicy(SessionCreationPolicy.NEVER)
	            .and()
	            .addFilterBefore(new CorsFilter(), AbstractPreAuthenticatedProcessingFilter.class)
	            .csrf().disable()
	            .authorizeRequests().anyRequest().authenticated()
	            .and()
	            .anonymous().authorities("ROLE_ANONYMOUS");
	    }

	    @Value("${oauth.uri}")
	    private String oauthHost;
}
