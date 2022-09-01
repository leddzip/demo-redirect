package fr.leddzip.demo.redirect.back.web.controller;

import fr.leddzip.demo.redirect.back.api.controller.RedirectApi;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RedirectController implements RedirectApi {

    public ResponseEntity<Void> redirect() {

        HttpHeaders headers = new HttpHeaders();
        headers.set("location", "https://google.com");

        return ResponseEntity
                .status(HttpStatus.MOVED_PERMANENTLY)
                .headers(headers)
                .build();
    }
}
