resource "aws_instance" "api_server" {
  instance_type = "t3.micro"
  ami = "ami-086cae3329a3f7d75" # aws ubuntu-22.04
}
