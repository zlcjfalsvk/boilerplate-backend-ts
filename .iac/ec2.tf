resource "aws_instance" "test_instance_server" {
  instance_type = "t3.micro"
  ami = data.aws_ami.ubuntu_22_04.id
  iam_instance_profile = aws_iam_instance_profile.instance_iam_profile.name
}

resource "aws_iam_instance_profile" "instance_iam_profile" {
  name = "instance_iam_profile"
  role = aws_iam_role.instance_role.name
}


data "aws_ami" "ubuntu_22_04" {
  most_recent      = true
  owners           = ["amazon"]

  filter {
    name   = "image-id"
    values = ["ami-086cae3329a3f7d75"]
  }
}
