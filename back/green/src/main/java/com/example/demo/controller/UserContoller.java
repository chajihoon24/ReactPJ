package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.UserDto;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/users")
public class UserContoller {
	
	@Operation(summary = "사용자 조회", description = "Id로 사용자 조회")
	@GetMapping("/id")
	public UserDto getUser(@PathVariable Long id) {
		
		UserDto userDto = new UserDto();
		
		return userDto;
	}

}
