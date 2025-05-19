from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://exemplo.com/login")

driver.find_element(By.ID, "username").send_keys("usuario")
driver.find_element(By.ID, "password").send_keys("senha123")
driver.find_element(By.ID, "login").click()

assert "Bem-vindo" in driver.page_source
driver.quit()